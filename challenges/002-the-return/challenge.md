# 002: The Return 🔁

**Concept:** `return` values · **Difficulty:** ★☆☆☆☆

## Goal

Make the function `giveHello` **return** the text `Hello, World!`.

## Description

Yesterday you *printed* text. It appeared on screen and was gone.
Today you'll *return* text instead.

The difference matters:

- `console.log("hi")` **shows** "hi" to a human looking at the screen.
- `return "hi"` **gives** "hi" back to whoever called the function, so the
  result can be used, saved... or tested.

That's why almost every challenge from now on uses `return`: it lets the
tests catch your function's answer and check it. Think of `console.log` as
*talking* and `return` as *handing something over*.

## Examples

| When you call | It returns        |
| ------------- | ----------------- |
| `giveHello()` | `"Hello, World!"` |

## What the tests check

- returns "Hello, World!"

## Hints

<details>
<summary>💡 Hint 1 (click to open)</summary>

The pattern is: `return "some text";`

</details>

<details>
<summary>💡 Hint 2 (click to open)</summary>

If the test says `Received: undefined`, your function isn't returning
anything yet. That's the test's way of saying "I got nothing back".

</details>
