import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "./models/User";

const app = express();

app.use(cors());
app.use(express.json());

const salt = "asdfasdfhaosid";

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const userDoc = await User.create({ username, password: bcrypt.hashSync(password, salt) });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(4000);
