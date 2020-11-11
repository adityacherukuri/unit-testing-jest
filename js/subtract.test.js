const { test, expect } = require("@jest/globals");
const subtract = require("./subtract");
const sum = require("./subtract");

test("Properly subtracts two numbers", () => {
  expect(subtract(10, 3)).toBe(7);
});
