const con = require("./connection");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.listen(8000);
