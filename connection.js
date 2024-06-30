const express = require("express");
const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "adarsha",
});
con.connect((err) => {
  if (err) {
    console.log("error in connection");
  } else {
    console.log("Connection Successfull");
  }
});

module.exports = con;
