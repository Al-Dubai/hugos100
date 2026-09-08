# Hugo's Hundred: 100 JavaScript Coding Challenges

**A hundred small JavaScript challenges, one per school day. Day 1 is
`console.log`; on day 100 your own bubble sort animates in the browser.**

This repo belongs to the course *Programming Basics* at HZ University of
Applied Sciences. Besides JavaScript itself, you'll get comfortable with the
terminal, git and automated tests along the way, since that's how you'll be
writing code after this course anyway.

## First time here?

Follow **[guide/setup.md](guide/setup.md)**. It takes you from zero to your
first solved challenge, step by step.

## Your daily routine (every school day, ~15 minutes)

```text
1.  git pull                            ← today's challenge appears
2.  open the new folder in challenges/ and read challenge.md
3.  write your code in solution.js      ← the ONLY file you edit
4.  npm test 023                        ← use today's number; repeat 3–4 until green ✅
5.  git add .
    git commit -m "solve 023"           ← save the day's work
```

The longer version with explanations is in
**[guide/daily-routine.md](guide/daily-routine.md)**.

## Check your progress

```text
npm run progress
```

Shows your progress per topic, your current streak, and your best streak.
Days without a new challenge (weekends, holidays) never break your streak.
All streak rules and a FAQ: **[guide/streaks.md](guide/streaks.md)**.

## The rules

- Only edit `solution.js`. Leave the tests alone: making a test easier is not
  the same as passing it, and it shows up immediately when we run the real one.
- The tests are the instructions, written in code. Read them before you write
  anything; [guide/reading-tests.md](guide/reading-tests.md) shows you how.
- Stuck on an error? Look it up in **[guide/troubleshooting.md](guide/troubleshooting.md)**
  before asking for help; nearly every error from this course is in there.
- Behind a few days? Do the oldest unsolved challenge first and work forward.
  They're deliberately small.

## What's in this repo?

```text
challenges/   ← one folder per challenge: instructions, your file, the tests
guide/        ← short guides for setup, the daily routine, tests, git, errors
tools/        ← the progress script (plain JavaScript that you'll be able
                to read yourself by the end of the course)
```

Made with 💚 by Hugo
