# The Streak, Explained 🔥

`npm run progress` shows a streak. This page explains exactly how it's
calculated, so you never have to guess whether something broke it. (The
counting happens in `tools/progress.js`, plain JavaScript you'll be able
to read yourself later in the course. These rules are what that code
does, nothing more.)

## The three rules

1. **Only release days count.** A release day is a calendar day on which
   a new challenge arrived. Days without a release (weekends, holidays,
   teacher-is-ill days) don't exist as far as the streak is concerned,
   so they can never break it.

2. **You keep a release day by committing.** Any `git commit` you make on
   that day counts, whatever the message says.

3. **You get one day of grace.** A commit on the day AFTER a release day
   still keeps that day. One day, not two: a Friday release is safe until
   the end of Saturday, and lost on Sunday.

Your current streak is the number of kept release days in a row, counted
back from the newest one. Your **best** streak is stored separately, so
it survives any break in the current one.

## FAQ

**Do I have to SOLVE the challenge to keep the streak?**
Strictly speaking, no: the streak counts your commits, not your test
results. Whether you actually solved things is tracked separately, by
the progress bars and the 100-square grid.

**Does a weekend break my streak?**
No. Days without a release can't break the streak, however many of them
come in a row. Holidays work the same way.

**I solved Friday's challenge on Sunday. Streak?**
Broken: the grace day was Saturday. The solve itself still counts in the
grid and the progress bars, and your best streak is kept.

**Do I need to push, or be online?**
No. Everything in this course is local: `git commit` is the whole job,
and there is no `git push`.

**Does it matter what my commit message is?**
No. `"solve 023"` is the convention, but any message works. Just don't
START a message with 📦, 🔧 or 🎉: those three mark the teacher's
commits, and the streak counter would mistake your commit for one of
Hugo's.

**Does committing more than once a day help?**
No, a day is either kept or not. Commit as often as you like; git
doesn't mind and the streak doesn't count past one.

**I commit just after midnight. Which day is that?**
The calendar date of the commit decides, so a 00:01 commit lands on the
new day. That's usually harmless, because the new day is the grace day
for yesterday's release. Just don't make it the routine.

**I missed a day completely. Now what?**
The current streak resets, the best streak stays. Do the oldest
unsolved challenge first and start again.

**Today's challenge is out, I haven't committed yet, and my streak
still shows yesterday's number. Bug?**
That's intentional. A release day whose grace day isn't over is neither
kept nor missed yet, so the counter looks past it for now. Commit and
it joins the streak; let the grace day pass and the streak restarts
from there.
