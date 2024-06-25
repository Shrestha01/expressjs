// Route level middle can be applied to one or more route.
// But, application level middleware are applied to all the route.

// importing express module
const express = require("express");
const app = express();

//importing router module for route level middleware
const route = express.Router();

// middleware function
const reqFilter = (req, res, next) => {
  if (req.query.age > 18) {
    next();
  } else {
    res.send("Sorry you are under age");
  }
};
//app.use(reqFilter);
// using middleware function in route
route.use(reqFilter);
app.get("/", (req, res) => {
  res.send("Hello I am from Home page");
});
route.get("/about", (req, res) => {
  res.send("Hello I am from About page");
});
route.get("/contact", (req, res) => {
  res.send("Hello I am from Contact page");
});

//route
app.use("/", route);
app.listen(8000, () => {
  console.log("server running on port 8000");
});
