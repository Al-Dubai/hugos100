# Troubleshooting 🆘

Every problem below is common and has a known fix. Find the error message
that matches yours and work through the steps.

## Terminal problems

### I did `git commit` and I ended up in some weird editor
That's Vim - press Esc, then type `:wq` and press Enter. That should get you out. You probably ended up here because you forgot to add the `-m "commit message"` to your commit.


### "npm: command not found" / "node: command not found"
Node.js isn't installed (or the terminal hasn't noticed yet).
Install it from <https://nodejs.org>, then **restart VS Code completely**.

### "git: command not found"
Install git from <https://git-scm.com>, restart VS Code.

### `npm test` says "no tests found", or nothing works at all
You're probably in the wrong folder. Type:

```text
pwd
```

- if it ends in `/hugos100`, it is correct
- if it ends in `/hugos100/challenges` or deeper, go up with `cd ..` (repeat until correct)
- somewhere else entirely? `cd` to your hugos100 folder

In VS Code, the top of the Explorer sidebar must say **HUGOS100**.

### "Cannot find module 'jest'" or similar
The packages aren't installed (or broke).

```text
npm install
```

## Git problems

### `git pull` says: "You have divergent branches"
Your repo is missing its course configuration (it's set up by `npm install`).
The fix is:

```text
npm install
git pull
```

### `git pull` says: "Your local changes would be overwritten"
Same cause as above: `npm install` configures git to handle this for you.
Run `npm install` once, then pull again. (Committing your work first also
fixes it, and the daily routine ends with a commit for a reason. 😉)

### `git pull` says: "Applying autostash resulted in conflicts"
Sounds scary, but the pull itself worked. It means you had unsaved edits in
a file that today's update also changed. That's almost always a file you
weren't supposed to edit (a test file or a challenge.md), because updates
never touch your `solution.js`.

Run `git status`: the file in red marked **both modified** is the one. Take
back the official version of *that file* (your edits to it are also kept in
git's stash, nothing is ever thrown away):

```text
git checkout HEAD -- challenges/0XX-the-challenge/solution.test.js
git stash drop
```

Your `solution.js` work is untouched by this. Unsure? Ask a TA before
typing anything.

### `git pull` says: "Please tell me who you are"
Git wants your name once (it signs your commits with it):

```text
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### I accidentally edited a test file (or broke something I shouldn't have)
Restore one file to its original state:

```text
git checkout -- challenges/023-some-challenge/solution.test.js
```

⚠️ Careful: this permanently throws away your changes *to that file*. Don't
run it on a `solution.js` you worked hard on.

### `git pull` stopped with "CONFLICT" and you're lost
Don't panic and don't guess. First, back out safely:

```text
git rebase --abort
```

That puts everything back the way it was before the pull. Then copy your
`solution.js` code somewhere safe (a new text file on your desktop is fine)
and ask a classmate, TA or a lecturer. This almost never happens if
`solution.js` is the only file you edit.

## Test problems

### Expected: 6, Received: undefined
Your function doesn't `return` anything. `console.log` shows things on
screen, but `return` is what gives the answer back. Challenge 002 explains
exactly this.

### Expected: "6", Received: 6 (or the other way around)
Text and numbers are different things in JavaScript. `"6"` (with quotes) is
text; `6` is a number. Check what the examples in challenge.md show.

### Expected: "Hello, World!", Received: "hello world"
Tests compare text **exactly**: capital letters, commas, spaces,
exclamation marks. Copy the expected text from the challenge precisely.

### My test passes in my head but fails in Jest
Trust Jest, not your head 😄. Read the **Received** line: that is what your
function truly returned. Add a temporary `console.log` inside your function
to see what's happening, run `npm test 023` again, and look at the output
above the result.

### Some other challenge's tests are failing, not today's
That's fine. `npm test 023` only runs challenge 023. Old unsolved
challenges just wait for you; nothing is broken.

## Still stuck?

1. Read the error message again, slowly. The answer is usually in it.
2. Re-read the challenge's **Examples** and **hints** (click them open).
3. Ask a classmate. Explaining your problem out loud often solves it.
4. Ask a TA. They finished the course last year and might have an insightful answer.
5. Ask a lecturer. Bring a question or the error message, not just "it doesn't work". 😉
