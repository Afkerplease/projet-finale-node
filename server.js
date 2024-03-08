const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   // res.status(200).send(" test serveur");
//   res.sendFile(path.resolve(__dirname, "./views/listDeContactPage.html"));
// });

app.listen(port, () => {
  console.log(`Serveur is on  http://localhost:${port}`);
});

// error typo de url
app.all("*", (req, res) => {
  res.status(404).send(` <h1>Ressource not found</h1> `);
});
