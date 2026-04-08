const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hello shreya how were u");
});
app.get("/about", (req, res) => {
  res.send("I am Under Graduate");
});

app.listen(3000);
