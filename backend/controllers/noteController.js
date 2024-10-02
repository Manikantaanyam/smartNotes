const Note = require("../models/Notes.js");
const { z } = require("zod");

const noteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

const createNote = async (req, res) => {
  const { title, content } = req.body;
  const payload = noteSchema.safeParse(req.body);
  if (!payload.success) {
    return res.status(400).json({ msg: "Invalid" });
  }
  try {
    const note = await Note.create({
      title: title,
      content: content,
      user: req.userId._id,
    });

    return res.status(200).json({ msg: "Note saved" });
  } catch (e) {
    return res.status(400).json({ msg: e.errors });
  }
};

const getNotes = async (req, res) => {
  const notes = await Note.find({ user: req.userId });
  return res.json({ notes });
};

const deleteNote = async (req, res) => {
  const id = req.query.id;

  const trimmedId = id.trim();
  const noteToDelete = await Note.findById(trimmedId);
  if (!noteToDelete) {
    return res.status(400).json({ msg: "Note not found" });
  }

  const deletedNote1 = await Note.findByIdAndDelete(trimmedId);
  return res.json({ msg: "Deleted" });
};

const seeNote = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await Note.findById(id);
    if (!response) {
      return res.status(404).json({ msg: "Note not found" });
    }

    return res.status(200).json({ msg: response });
  } catch (e) {
    return res.status(400).json({ msg: " something error occured" });
  }
};

const updateNote = async (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  try {
    const response = await Note.findByIdAndUpdate(id, { title, content });
    return res.json({ msg: "Updated Notes" });
  } catch (e) {
    return res.status(400).json({ msg: "Error occured" });
  }
};

module.exports = { createNote, getNotes, deleteNote, seeNote, updateNote };
