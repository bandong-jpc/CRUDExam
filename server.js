const express = require("express");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

app.use(express.json());
app.use(routes);
