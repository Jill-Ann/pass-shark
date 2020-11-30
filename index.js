const validate = (username, password) => {
  if (typeof username !== "string" || typeof password !== "string") {
    throw new TypeError("Please pass in a string");
  }
  const substrLength = Math.ceil(
    Math.min(username.length, password.length) / 2
  );

  for (i = 0; i <= username.length - substrLength; i++) {
    let substr = username.substring(i, i + substrLength);
    if (password.includes(substr)) return false;
  }
  return true;
};

module.exports = validate;
