const validate = require("./");

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

it("takes substring length from username when username is shorter", () => {
  const result = validate("cat", "purplecat");
  expect(result).toBe(false);
});

it("takes substring length from password when password is shorter", () => {
  const result = validate("purplecat", "cat");
  expect(result).toBe(false);
});

it("shouldn't allow exact matches", () => {
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

it("shouldn't accept empty string as username", () => {
  const result = validate("", "averysecurepassword");
  expect(result).toBe(false);
});

it("shouldn't accept empty string as password", () => {
  const result = validate("areallycoolusername", "");
  expect(result).toBe(false);
});

it("should throw an error if something other than a string is passed in", () => {
  expect(() => validate("myUsername", 12345)).toThrow(TypeError);
});
