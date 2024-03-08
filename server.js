const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const users = require("./data");

// app.use(express.static("./public"));
// app.get("/", (req, res) => {
//   // res.status(200).send(" test serveur");
//   res.sendFile(path.resolve(__dirname, "./views/listDeContactPage.html"));
// });
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home", { users });
});
app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const findUser = users.find((u) => u.id === +userId);
  if (!findUser) return res.status(404).send("product doesn not exist");
  res.render("userPage", { findUser });
});

app.listen(port, () => {
  console.log(`Serveur is on  http://localhost:${port}`);
});

// error typo de url
app.all("*", (req, res) => {
  res.status(404).send(` <h1>Ressource not found</h1> `);
});
