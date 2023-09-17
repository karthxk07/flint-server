const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/login", loginRoute);
app.use("/signup", signupRoute);

app.listen(8000, () => {
  console.log("Listening to server on port 8000");
});
