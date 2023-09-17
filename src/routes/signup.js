const express = require("express");
const { isAuthenticated } = require("../services/authService");
const router = express.Router();
const users = require("../data/users");

router.post("/", (req, res) => {
  const name = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  name &&
    email &&
    password &&
    users.push({ username: name, email: email, password: password });
  console.log(users);
  res.json({ name: name, accessToken: "random", isAuthenticated: true });
});

module.exports = router;
