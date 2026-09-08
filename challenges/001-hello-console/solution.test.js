// Tests for challenge 001.
//
// This very first test is special: it checks what your function PRINTS.
// To do that, it secretly "listens in" on console.log. You don't need to
// understand the listening part yet, and that's okay. From challenge 002
// onwards, the tests get much simpler to read.

const { sayHello } = require("./solution");

describe("001: Hello Console", () => {
  test('prints "Hello, World!" to the console', () => {
    // Ask Jest to listen to everything console.log says...
    const listener = jest.spyOn(console, "log").mockImplementation(() => {});

    // ...run YOUR function...
    sayHello();

    // ...and check that it printed exactly the right text.
    expect(listener).toHaveBeenCalledWith("Hello, World!");

    listener.mockRestore(); // stop listening, be polite
  });
});
