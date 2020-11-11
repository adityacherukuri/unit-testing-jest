const { test, expect } = require("@jest/globals");
const { array } = require("yargs");
const cloneArray = require("./cloneArray");

test("Properly clones array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toStrictEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
