const users = require("../data/users");

exports.isAuthenticated = (username, password) => {
  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return false; // Authentication failed
  }

  return true; // Authentication successful
};
