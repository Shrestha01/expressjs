// middleware function
module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide your age");
  } else if (req.query.age > 18) {
    next();
  } else {
    res.send("Sorry you are under age");
  }
};
