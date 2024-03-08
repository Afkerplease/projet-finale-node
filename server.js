const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const users = require("./data");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home", { users });
});
app.get("/user/:userId", (req, res) => {
  const { userId } = req.params;
  const findUser = users.find((u) => u.id === +userId);
  if (!findUser) return res.status(404).send("product doesn not exist");
  res.render("userPage", { findUser });
});
app.post("/addUser", (req, res) => {
  const { first_name, last_name, telephone, email, dateNaissance } = req.body;

  const newUser = {
    id: users.length + 1,
    first_name,
    last_name,
    telephone,
    email,
    dateNaissance,
  };

  users.push(newUser);

  res.redirect("/");
});
app.listen(port, () => {
  console.log(`Serveur is on  http://localhost:${port}`);
});
app.get("/addUser", (req, res) => {
  res.render("addUser");
});

// error typo de url
app.all("*", (req, res) => {
  res.status(404).send(` <h1>page not found</h1> `);
});
