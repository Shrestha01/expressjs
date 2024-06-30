const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "adarsha",
});
con.connect(() => {
  if (err) {
    console.warn("connection error");
  } else {
    console.log("database connected");
  }
});

module.exports = con;
