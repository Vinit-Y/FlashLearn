const scoresFor = {};

function isValidUsername(username) {
  let isValidUsername = true;
  isValidUsername = !!username && username.trim();
  isValidUsername = isValidUsername && username.match(/^[A-Za-z0-9_]+$/);
  return isValidUsername;
}

export {
  isValidUsername,
  scoresFor
};
