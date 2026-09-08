// setup-git.js: runs automatically after `npm install` (see package.json).
//
// It teaches git, for this folder only, how to handle the daily pull:
//
//   pull.rebase = true      → when you pull, your commits are replayed on top
//                             of Hugo's new commits. One clean history, no
//                             surprise "merge" screens.
//   rebase.autoStash = true → if you have unsaved work when you pull, git
//                             parks it, pulls, and puts it back. You don't
//                             have to do anything.
//
// Nothing here touches your global git settings or any other project.

const { execSync } = require("child_process");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function gitConfig(key, value) {
  execSync(`git config ${key} ${value}`, { cwd: ROOT, stdio: "pipe" });
}

try {
  gitConfig("pull.rebase", "true");
  gitConfig("rebase.autoStash", "true");
  console.log("✅ git is configured for the course (this repo only).");
} catch {
  // No git, or this folder isn't a git repository (downloaded as a zip?).
  // Not a disaster: everything still works except `git pull`.
  console.log("⚠️  Couldn't configure git. If you cloned with git, ask a TA about this.");
}
