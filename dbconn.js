const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
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

module.exports = dbConn;
