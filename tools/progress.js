// progress.js: your personal dashboard. Run it with:  npm run progress
//
// This is plain JavaScript, built almost entirely from things this course
// teaches: variables, conditionals, loops, arrays, objects, functions and a
// few higher-order functions. Curious how it works? Read it! There's a tour
// in guide/how-this-repo-works.md (Mystery 4).
//
// It does three things:
//   1. asks Jest to run all tests and hand back the results as data
//   2. asks git for the commit list, to work out release days and your streak
//   3. loops over it all and prints the dashboard

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const CHALLENGES_DIR = path.join(ROOT, "challenges");

const UNITS = [
  { name: "Variables", from: 1, to: 10 },
  { name: "Conditionals", from: 11, to: 20 },
  { name: "Loops", from: 21, to: 30 },
  { name: "Arrays", from: 31, to: 40 },
  { name: "Functions", from: 41, to: 50 },
  { name: "Recursion", from: 51, to: 60 },
  { name: "Randomness", from: 61, to: 70 },
  { name: "Objects", from: 71, to: 80 },
  { name: "Strings", from: 81, to: 90 },
  { name: "Try-Catch", from: 91, to: 95 },
  { name: "Sorting", from: 96, to: 100 },
];

// ---------- 1. which challenges are released, and which are solved? ---------

const released = fs
  .readdirSync(CHALLENGES_DIR)
  .filter((name) => /^\d{3}-/.test(name))
  .sort();

if (released.length === 0) {
  console.log("No challenges released yet. Run git pull, or be patient.");
  process.exit(0);
}

console.log("Running all tests, one moment...");

function runJest() {
  try {
    return execSync("npx jest --json --silent", {
      cwd: ROOT,
      stdio: ["ignore", "pipe", "ignore"],
      maxBuffer: 64 * 1024 * 1024,
    }).toString();
  } catch (error) {
    // Jest exits angrily when any test fails, but its JSON report is
    // still there in the output, and that's all we need.
    if (error.stdout) return error.stdout.toString();
    throw error;
  }
}

const report = JSON.parse(runJest());

// A challenge counts as solved when its whole test file passes.
const solvedNumbers = new Set();
report.testResults.forEach((suite) => {
  if (suite.status === "passed") {
    const folder = path.basename(path.dirname(suite.name)); // "019-cinema-tickets"
    solvedNumbers.add(parseInt(folder.slice(0, 3), 10));
  }
});

const releasedNumbers = new Set(released.map((name) => parseInt(name.slice(0, 3), 10)));

// ---------- 2. the streak (from git's commit history) -----------------------
//
// The rules (simple on purpose):
//  • Only days when a challenge was released count. Weekends and holidays
//    can never break a streak. Release commits start with 📦.
//  • A release day is "kept" if you committed that day OR the next day
//    (one day of grace).
//  • Days still inside the grace window are simply "not decided yet".

function toDayString(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dayOfMonth = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${dayOfMonth}`;
}

function nextDay(day) {
  const date = new Date(day + "T12:00:00");
  date.setDate(date.getDate() + 1);
  return toDayString(date);
}

const today = toDayString(new Date());
const TEACHER_PREFIXES = ["📦", "🔧", "🎉"];

const releaseDays = new Set();
const studentDays = new Set();

let log = "";
try {
  log = execSync('git log --pretty=format:"%ad|%s" --date=short', {
    cwd: ROOT,
    stdio: ["ignore", "pipe", "ignore"],
  }).toString();
} catch {
  // Not a git repo or no commits yet. Fine, there's just no streak to show.
}

log.split("\n").filter((line) => line.includes("|")).forEach((line) => {
  const day = line.slice(0, line.indexOf("|"));
  const message = line.slice(line.indexOf("|") + 1);
  if (message.startsWith("📦")) {
    releaseDays.add(day);
  } else if (!TEACHER_PREFIXES.some((prefix) => message.startsWith(prefix))) {
    studentDays.add(day); // a commit by YOU
  }
});

const sortedReleaseDays = [...releaseDays].sort();
const isKept = (day) => studentDays.has(day) || studentDays.has(nextDay(day));
const isStillOpen = (day) => nextDay(day) >= today; // grace period not over yet

// Current streak: walk backwards from the newest release day.
let currentStreak = 0;
for (let i = sortedReleaseDays.length - 1; i >= 0; i--) {
  const day = sortedReleaseDays[i];
  if (isKept(day)) currentStreak++;
  else if (isStillOpen(day)) continue; // not decided yet, look further back
  else break; // a missed day: the streak stops here
}

// Best streak ever: walk forwards and remember the longest run.
let bestStreak = 0;
let run = 0;
sortedReleaseDays.forEach((day) => {
  if (isKept(day)) {
    run++;
    if (run > bestStreak) bestStreak = run;
  } else if (!isStillOpen(day)) {
    run = 0;
  }
});

// ---------- 3. draw the dashboard -------------------------------------------

const lines = [];
lines.push("HUGO'S 100: your progress");
lines.push("────────────────────────────────────────");

UNITS.forEach((unit) => {
  let bar = "";
  let solvedCount = 0;
  let releasedCount = 0;
  for (let n = unit.from; n <= unit.to; n++) {
    if (solvedNumbers.has(n)) {
      bar += "█";
      solvedCount++;
      releasedCount++;
    } else if (releasedNumbers.has(n)) {
      bar += "░";
      releasedCount++;
    } else {
      bar += "·";
    }
  }
  let label = "not released yet";
  if (releasedCount > 0) {
    label = `${String(solvedCount).padStart(2)}/${releasedCount}`;
    if (solvedCount === unit.to - unit.from + 1) label += " ✅";
  }
  lines.push(`${unit.name.padEnd(13)} ${bar}  ${label}`);
});

lines.push("────────────────────────────────────────");
let footer = `${solvedNumbers.size} solved of ${released.length} released`;
if (sortedReleaseDays.length > 0) {
  const dayWord = currentStreak === 1 ? "day" : "days";
  footer += `  ·  🔥 streak: ${currentStreak} school ${dayWord}  ·  🏆 best: ${bestStreak}`;
}
lines.push(footer);

// The 100-day grid: one square per challenge, ten per row.
const gridRows = [];
for (let row = 0; row < 10; row++) {
  let cells = "";
  for (let col = 1; col <= 10; col++) {
    const n = row * 10 + col;
    if (solvedNumbers.has(n)) cells += "🟩";
    else if (releasedNumbers.has(n)) cells += "🟨";
    else cells += "⬜";
  }
  gridRows.push(cells);
}

console.log("");
console.log(lines.join("\n"));
console.log("");
console.log(gridRows.join("\n"));
console.log("🟩 solved   🟨 to do   ⬜ not released yet");

// ---------- 4. also save it as a file, just for you -------------------------

const markdown = [
  "# My Progress: Hugo's 100",
  "",
  `_Updated ${today} by \`npm run progress\`. This file is only for you, git ignores it._`,
  "",
  gridRows.join("\n"),
  "",
  "🟩 solved   🟨 to do   ⬜ not released yet",
  "",
  "```text",
  lines.join("\n"),
  "```",
  "",
].join("\n");

fs.writeFileSync(path.join(ROOT, "my-progress.md"), markdown);
console.log("\n(saved to my-progress.md, open it in Markdown preview)");
