const { test, expect } = require("@jest/globals");
const sum = require("./sum");

test("Properly adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
