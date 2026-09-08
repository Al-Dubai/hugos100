# How This Repo Actually Works 🔍

At the start of the course, you were told "leave this line alone" and "don't
worry about that yet". This page removes the mysteries. Come back to it
whenever you're curious. By the end of the course, you'll understand all of
it.

## Mystery 1: `module.exports = { ticketPrice };`

Every `solution.js` ends with a line like this. Here's the secret: each file
in Node.js is a **module**: a closed box. Whatever you build inside the box
stays invisible to other files... unless you put it in `module.exports`.

```js
module.exports = { ticketPrice };
```

means: "Other files are allowed to use my `ticketPrice` function."

And the first line of every test file is the other half:

```js
const { ticketPrice } = require("./solution");
```

means: "Get `ticketPrice` out of the box called `solution.js`." That's how
the test gets hold of *your* function to check it. 

## Mystery 2: what IS `npm test 023`?

Open `package.json` in the root of the repo. You'll find:

```json
"scripts": {
  "test": "jest --verbose",
  "progress": "node tools/progress.js"
}
```

`npm test` simply runs the command stored under `"test"`: the program
**Jest**, our test runner. The `023` is passed along to Jest, which uses it
as a search word: "only run test files whose path contains 023". That's why
one number runs one challenge.

Jest itself is in `node_modules/`, the folder `npm install` created on day
one, containing Jest and everything Jest needs.

## Mystery 3: how do the tests work?

`describe`, `test`, and `expect` are ordinary functions that Jest provides,
less special than they look. `expect(x).toBe(y)` checks `x === y` (the
same `===` you've used since challenge 013) and reports the result in
nice colors. You can read every test in this repo now.

## Mystery 4: the progress script

Open `tools/progress.js`. It's plain JavaScript, written mostly with things
you learn in this course: variables, conditionals, loops, arrays, objects,
functions. (It also uses `.forEach()` and friends, which the course skips;
they're loops in fancy jackets.) It does three things:

1. Asks Jest to run all tests and report the results as data (instead of text)
2. Asks git for the list of commits, to work out release days and your streak
3. Loops over it all and prints the dashboard

Reading code you didn't write is a skill of its own, and this file is a
good place to practice: you know what it does, now see how.

## Mystery 5: where do challenges come from every day?

Hugo has a private copy of this repository containing all 100 challenges.
Each school day, Hugo pushes a commit (you can see them with `git log`, they're the 📦 ones). When you run
`git pull`, git compares histories and downloads what you're missing.

In other words: the entire course runs on the same tools you've been using
every day: git, Node, npm, and plain JavaScript files.