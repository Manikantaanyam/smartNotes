const jwt = require("jsonwebtoken");
const z = require("zod");
const user = require("../models/User.js");
const bcrypt = require("bcrypt");

const userInputSchema = z.object({
  username: z.string().min(3, "username must be 3 characters"),
  email: z.string().email("invalid email"),
  password: z.string().min(6, "password must be 6 characters"),
});

const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const payload = userInputSchema.safeParse(req.body);
  if (!payload.success) {
    const error = payload.error.issues.map((i) => i.message);

    return res.status(400).json({ msg: error });
  }

  const userExits = await user.findOne({ email });
  if (userExits) {
    return res.status(400).json({ msg: "user already exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user1 = await user.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      username: user1.username,
      email: user1.email,
      token: generateToken(user1._id),
    });
  } catch (e) {
    return res.status(403).json({ msg: e.errors });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const payload = loginInputSchema.safeParse(req.body);

  if (!payload.success) {
    return res.status(400).json({ msg: "Invalid Inputs" });
  }

  try {
    const userExits = await user.findOne({ email });
    if (!userExits) {
      return res.status(400).json({ msg: "user doesn't exist" });
    }

    const okpassword = await bcrypt.compare(password, userExits.password);

    if (!okpassword) {
      return res.status(400).json({ msg: "invalid password" });
    }

    return res.status(201).json({
      msg: {
        username: userExits.username,
        email: userExits.email,
        token: generateToken(userExits._id),
      },
    });
  } catch (e) {
    return res.json({ msg: e.errors });
  }
};

module.exports = { registerUser, loginUser };
