# Setup: from zero to your first green test ✅

You only do this once. Take your time, read every step.

## 1. Install the tools

You need two programs (you may already have them from the PCO HTML/CSS week):

- **Visual Studio Code**: <https://code.visualstudio.com>
- **Node.js (LTS version)**: <https://nodejs.org>. This also installs `npm`
  and lets your computer run JavaScript outside the browser.

**Check that it worked.** Open a terminal (in VS Code: menu *Terminal → New
Terminal*) and type:

```text
node --version
```

If you see a version number like `v24.x.x`, you're good. If you see
"command not found", restart VS Code (and on Windows, restart your computer)
and try again.

## 2. Get the challenges

In the terminal, go to the folder where you keep your school work, then:

```text
git clone <REPO-URL-FROM-YOUR-TEACHER>
cd hugos100
```

> 💡 `git clone` downloads the project. `cd hugos100` steps into its folder.
> The terminal always works *somewhere*, and `pwd` tells you where you are.

## 3. Open it in VS Code

```text
code .
```

(Or: File → Open Folder → choose `hugos100`.)

**Important:** always open the `hugos100` folder itself, not a folder inside
it and not the folder above it. Check the VS Code Explorer (left sidebar): the
top line should say **HUGOS100**.

## 4. Install the test runner

```text
npm install
```

This downloads Jest, the program that checks your solutions. It creates a
`node_modules` folder; that's normal, leave it alone. It also configures git
(for this folder only) so the daily `git pull` stays simple. You only run
this once (and again if anything ever breaks).

## 5. Solve your first challenge 🎉

1. Open `challenges/001-hello-console/challenge.md`
   (tip: right-click the file tab → **Open Preview** for the pretty version)
2. Write your code in `solution.js` in that same folder
3. In the terminal, run:

```text
npm test 001
```

Red ❌ means not yet. Read the message, it tells you what was expected.
Green ✅ means the test passed and challenge 001 is officially solved.

## 6. Commit your work with git

```text
git add .
git commit -m "solve 001"
```

You'll do this every day. A commit is a saved snapshot in git's history, and
it's also what your streak is counted from (the exact rules are in
[streaks.md](streaks.md)). See [daily-routine.md](daily-routine.md) for
tomorrow.
