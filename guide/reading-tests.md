# How to Read a Test 🧪

In this project, tests are not exams, but **the instructions, written in
code**. Once you can read them, every challenge comes with its requirements
spelled out precisely, and error messages stop being scary.

## A real example

Here's a test file like the ones in this repo:

```js
const { ticketPrice } = require("./solution");

describe("019: Cinema Tickets", () => {
  test("children under 12 pay €6", () => {
    expect(ticketPrice(8)).toBe(6);
  });

  test("adults pay €12", () => {
    expect(ticketPrice(30)).toBe(12);
  });
});
```

Read it line by line:

| Line | Meaning |
| --- | --- |
| `require("./solution")` | "Get the `ticketPrice` function from solution.js". That's *your* code being loaded. |
| `describe(...)` | The name of the whole group of tests (one per challenge). |
| `test("children under 12 pay €6", ...)` | One rule your function must follow, **in plain words**. |
| `expect(ticketPrice(8)).toBe(6)` | The rule as code: "calling `ticketPrice(8)` must give exactly `6`." |

So `expect(X).toBe(Y)` simply means: **X should be Y**.

> Later, when challenges use arrays, you'll also see `expect(X).toEqual(Y)`.
> It means the same thing, but it's the version that knows how to compare
> lists. The test file will remind you when it first shows up.

## Reading the output

When a test fails, Jest tells you exactly what happened:

```text
✕ children under 12 pay €6

  expect(received).toBe(expected)

  Expected: 6
  Received: undefined
```

- **Expected** = what the test wanted.
- **Received** = what your function actually gave back.

`Received: undefined` is the most common one. It means your function didn't
`return` anything. Other classics: `Received: "6"` (you returned text instead
of a number, so check your quotes) and a difference of capital letters or
punctuation in a string (the test wants *exactly* the text from the
examples).

## Before you write any code

**Read the test names out loud first.** They are a
checklist of everything your function must do. It's the same list as "What the
tests check" in challenge.md. If all the names make sense to you, you
understand the challenge.
