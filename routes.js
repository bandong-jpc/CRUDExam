const dbConn = require("./dbconn");

const router = require("express").Router();

router.get("/all", (req, res) => {
  dbConn.query("SELECT * from items", (err, results) => {
    if (err) return res.status(500).json({ body: "Error: " + err.message });
    else {
      return res.status(200).json({ body: results });
    }
  });
});

router.post("/add", (req, res) => {
  console.log(req.body);
  const { name, qty, amount } = req.body;

  var query = `INSERT INTO items (name, qty, amount) VALUES ('${name}', ${qty}, ${amount})`;

  console.log(query);
  dbConn.query(query, (err, result) => {
    if (err) return res.status(500).json({ body: "Error: " + err.message });
    else {
      return res.status(200).json({ body: "Row inserted" });
    }
  });
});

module.exports = router;
