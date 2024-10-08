const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  created_At: {
    type: Date,
    default: Date.now(),
  },
});

const Note = mongoose.model("notes", noteSchema);

module.exports = Note;
