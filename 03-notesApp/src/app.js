//creating server
const express = require("express");
const app = express();
//middleware -> adding in express server whatever in body it's not capable of read so that's why we use it
app.use(express.json());
//values store in ram that's why notes are deleted after closing the server
const notes = [];
//we need to send data from frontend to server that's why post
app.post("/notes", (req, res) => {
  //   console.log(req.body);
  notes.push(req.body);
  res.status(201).json({
    message: "note created successfully",
  });
});
//server to frontend
app.get("/notes", (req, res) => {
  res.status(200).json({
    message: "notes fetch successfully",
    notes: notes,
  });
});
// /notes/ static and /index dynamic
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.status(200).json({
    message: "deleted successfully",
  });
});
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const description = req.body.description;
  notes[index].description = description;
  res.status(200).json({
    message: "note upadated successfully",
  });
});

module.exports = app;
