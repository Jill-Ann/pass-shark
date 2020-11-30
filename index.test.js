const validate = require("./index");

it("doesn't allow 7 out of 11 consecutive username characters", () => {
  const result = validate("CoyotivUser", "CoyotivPass");
  expect(result).toBe(false);
});

it("doesn't allow 4 out of 8 consecutive username characters", () => {
  const result = validate("username", "myname");
  expect(result).toBe(false);
});

it("allows 3 out of 8 consecutive username characters", () => {
  const result = validate("username", "america");
  expect(result).toBe(true);
});

it("doesn't allow exact matches", () => {
  const result = validate("berlin2020", "berlin2020");
  expect(result).toBe(false);
});

it("is case sensitive", () => {
  const result = validate("username", "MYNAME");
  expect(result).toBe(true);
});

it("should count a space as a character", () => {
  const result = validate("username 1", "same 1");
  expect(result).toBe(false);
});

it("accepts symbols", () => {
  const result = validate("whatever$%&#*", "neverever$%&#*");
  expect(result).toBe(false);
});
