// Tests for challenge 002.
//
// From now on the tests look like this. Read them out loud:
// "expect giveHello() to be 'Hello, World!'". That's the whole rule.

const { giveHello } = require("./solution");

describe("002: The Return", () => {
  test('returns "Hello, World!"', () => {
    expect(giveHello()).toBe("Hello, World!");
  });
});
