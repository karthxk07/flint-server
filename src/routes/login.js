const express = require("express");
const { isAuthenticated } = require("../services/authService");
const router = express.Router();

router.post("/", (req, res) => {
  const name = req.body.username;
  const password = req.body.password;
  isAuthenticated(name, password)
    ? res.json({
        username: name,
        accessToken: "Random ",
        isAuthenticated: true,
      })
    : res.json({
        isAuthenticated: false,
      });
});

module.exports = router;
