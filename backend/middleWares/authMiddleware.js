const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const protected = async (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(400).json({ msg: "No token provided" });
  }
  const jtoken = token.split(" ")[1];

  try {
    const decoded = await jwt.verify(jtoken, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({ msg: "Not authorixed" });
    }
    req.userId = await User.findById(decoded.id).select("-password");

    next();
  } catch (e) {
    return res.status(400).json({ msg: e.errors });
  }
};

module.exports = { protected };
