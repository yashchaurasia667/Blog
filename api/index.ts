import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import User from "./models/User";

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

const salt = bcrypt.genSaltSync(10);
const secret = "asdhoasihdfajs";

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc!.password);
    // res.json(passOk);
    if (passOk) {
      // logged in
      jwt.sign({ username, id: userDoc?._id }, secret, {}, (error, token) => {
        if (error) throw error;
        res.cookie("token", token).json("ok");
      });
    } else {
      res.status(400).json("wrong credentials");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get("/profile", (req, res) => {
  res.json(req.cookies);
});

app.listen(4000);
