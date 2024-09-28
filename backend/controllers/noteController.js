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
  const notes = await Note.find();
  return res.json({ notes });
};

module.exports = { createNote, getNotes };
