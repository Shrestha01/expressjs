const express = require("express");
const app = express();
const hbs = require("hbs");
//setting view engine (hbs)
app.set("view engine", "hbs");

//app.use("./view");

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
