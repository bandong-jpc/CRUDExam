const express = require("express");
const mysql = require("mysql");

const app = express();

const PORT = process.env.PORT || 5000;

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "retype00",
  database: "inventory",
  port: 3306,
});

dbConn.connect((err) => {
  if (err) {
    console.log("DB Connection failed: " + err.message);
  } else {
    console.log("DB Connected");
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
