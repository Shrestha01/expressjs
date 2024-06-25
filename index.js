// Route level middle can be applied to one or more route.
// But, application level middleware are applied to all the route.

// importing express module
const express = require("express");
const app = express();
// importing middleware function from middleware.js file
const reqFilter = require("./middleware.js");

//importing router module for route level middleware
const route = express.Router();

//app.use(reqFilter);
// using middleware function in route
route.use(reqFilter);

// Route without middleware are created with app.get()
// Route with middleware are created with route.get()
app.get("/", (req, res) => {
  res.send("Hello I am from Home page");
});
// route with middleware
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
