const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(" test serveur");
});

app.listen(port, () => {
  console.log(`Serveur is on  http://localhost:${port}`);
});