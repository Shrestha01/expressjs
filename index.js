const express = require("express");
const app = express();

// application level middleware
const reqFilter = (req, res, next) => {
  const age = req.query.age;
  console.log(age);
  if (age > 18) {
    next();
  } else {
    res.send("You are under age");
  }
};
// using middleware
app.use(reqFilter);

//Route
app.get("/", (req, res) => {
  res.send("Hello i am from serverside");
});
app.get("/home", (req, res) => {
  res.send("Hi, I am from Home page.");
});
app.get("/about", (req, res) => {
  res.send("Hi, I am from About page.");
});

app.listen("8000", () => {
  console.log("server running on 8000 port");
});
