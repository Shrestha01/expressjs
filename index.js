const express = require("express");
const app = express();


// abblication level middleware
const reqFilter = (req,res,next)={
}

app.use(reqFilter)
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
