// view engine in express js are used to show dynamic HTML page in node js

const express = require("express"); // importing express
const hbs = require("hbs"); // importing hbs
const app = express(); // creating express js app
const bodyParser = require("body-parser"); //body parser for form data

// view engine setting as hbs
app.set("view engine", "hbs");

//setting path for view
app.set("views", "./views");

// using bodyparser to extract form data.
app.use(bodyParser.urlencoded({ extended: false }));

// Route  with dynamic data passing
app.get("/", (req, res) => {
  // render home templete with dynamic data
  res.render("home");
});

app.post("/login", (req, res) => {
  const name = req.body.username;
  const password = req.body.password;
  if (name === "adarsha" && password === "adarsha") {
    res.render("dashboard", { name, password });
  } else {
    res.send("Login failed");
  }
});

//starting a server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
