const express = require("express");
const { createNote, getNotes } = require("../controllers/noteController");
const { protected } = require("../middleWares/authMiddleware");
const router = express.Router();

router.post("/", protected, createNote);
router.get("/", protected, getNotes);

module.exports = router;
