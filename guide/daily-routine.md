# The Daily Routine 🔁

Every school day, a new challenge appears. The routine is always the same.

## Step 1: Get today's challenge

```text
git pull
```

git downloads whatever is new. You'll see a new folder appear in
`challenges/`. (Nothing new? Then there's no challenge today. Weekends and
holidays are free, and they never break your streak.)

> ⚠️ If `git pull` complains, don't guess: find the exact message in
> [troubleshooting.md](troubleshooting.md). Every pull problem has a
> two-line fix there.

## Step 2: Read the challenge

Open the new folder and read `challenge.md` (right-click the tab → **Open
Preview**). Read the **Examples** table carefully. The tests check exactly
those.

## Step 3: Write your code

Open `solution.js` in the same folder and write your code where it says
`✏️ your code here`. This is the **only** file you ever edit.

## Step 4: Run the test

```text
npm test 023        ← today's challenge number
```

- ❌ Red? Read the message. It shows what your function returned and what was
  expected. Change your code and run the test again, as often as you need.
- ✅ Green? Done!

> 💡 Want to *see* your function's output? Every `solution.js` has a
> commented-out `console.log` line at the bottom. Remove the `//`, then run
> `node challenges/023-…/solution.js`. (Type `chal` and press **Tab**, the
> terminal completes the path for you.)

## Step 5: Commit your work

```text
git add .
git commit -m "solve 023"
```

This saves a snapshot of your work in git's history, and it's also what
keeps your streak going (the exact rules are in [streaks.md](streaks.md)).

## Step 6 (optional): Admire your progress

```text
npm run progress
```

## Missed a day or two?

It happens. Do the oldest unsolved challenge first and work forward. You get
one day of grace before a streak breaks, and your **best streak** is always
remembered; the exact rules are in [streaks.md](streaks.md).
