const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const authRoutes = require("./routes/authRoutes.js");
const noteRouter = require("./routes/notesRouter.js");
dotenv.config();

mongoose.connect(process.env.DB_URL);

app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRouter);
app.listen(3000, () => {
  console.log("server running at " + 3000);
});
