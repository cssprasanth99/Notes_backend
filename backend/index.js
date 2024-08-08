const express = require("express");
const notes = require("./data/note");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id == req.params.id);
  res.send(note);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
