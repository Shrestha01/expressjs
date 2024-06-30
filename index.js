const con = require("./connection");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  con.query("select * from users", (err, result) => {
    if (err) {
      res.send("error in api");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = { id: 2, name: "adarsha", password: "adarsha" };

  con.query("insert INTO users SET ?", data, (err, result, fields) => {
    if (err) {
      console.error("Error inserting into users table:", err);
      return res.status(500).send("Error inserting data into users table");
    }
    console.log("Insertion successful");
    res.send(result);
  });
});

app.listen(8000);
