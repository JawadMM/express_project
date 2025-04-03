const express = require("express");

const PORT = 3000;

const app = express();

const friends = [
  { id: 0, name: "J" },
  { id: 1, name: "JJ" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
