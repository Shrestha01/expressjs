// view engine in express js are used to show dynamic HTML page in node js

const express = require("express"); // importing express
const hbs = require("hbs"); // importing hbs
const app = express(); // creating express js app

// view engine setting as hbs
app.set("view engine", "hbs");

//setting path for view
app.set("views", "./views");

// Route  with dynamic data passing
app.get("/", (req, res) => {
  const data = {
    name: "adarsha",
  };
  // render home templete with dynamic data
  res.render("home", data);
});

//starting a server on port 8000
app.listen(8000, () => {
  console.log("Server running on port 8000");
});
