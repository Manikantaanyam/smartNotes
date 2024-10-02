const express = require("express");
const {
  createNote,
  getNotes,
  deleteNote,
  seeNote,
  updateNote,
} = require("../controllers/noteController");
const { protected } = require("../middleWares/authMiddleware");
const router = express.Router();

router.post("/", protected, createNote);
router.get("/:id", protected, seeNote);
router.get("/", protected, getNotes);
router.delete("/", protected, deleteNote);
router.put("/:id", protected, updateNote);
module.exports = router;
