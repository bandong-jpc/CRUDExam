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
  const { name, qty, amount } = req.body;

  var query = `INSERT INTO items (name, qty, amount) VALUES ('${name}', ${qty}, ${amount})`;

  dbConn.query(query, (err, result) => {
    if (err) return res.status(500).json({ body: "Error: " + err.message });
    else {
      return res.status(200).json({ body: "Row inserted" });
    }
  });
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, qty, amount } = req.body;

  var query = `UPDATE items SET name = ?, qty = ?, amount = ?  WHERE id = ${id}`;

  dbConn.query(query, [name, qty, amount], (err, resulty) => {
    if (err) return res.status(500).json({ body: "Error: " + err.message });
    else {
      return res.status(200).json({ body: "Row updated" });
    }
  });
});

module.exports = router;
