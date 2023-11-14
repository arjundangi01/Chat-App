const express = require("express");
const UserModel = require("../models/user.mode");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const userRouter = express.Router();
userRouter.get("/", async (req, res) => {
  try {
    res.send("h");
  } catch (error) {}
});
userRouter.get("/single", async (req, res) => {
    try {
    
  } catch (error) {}
});


userRouter.post("/signup", async (req, res) => {
  const { userName, password } = req.body();
  try {
    const existingUser = await UserModel.findOne({ userName });
    if (existingUser) {
      res.send({ message: "User already registered" });
    } else {
      bcrypt.hash(password, 2, function (err, hash) {
        const newUser = UserModel.create({ userName, password: hash });
        let token = jwt.sign({ userId: newUser._id }, "json_secret");
        res.send({ message: "User registered successful", token });
      });
    }
  } catch (error) {
    console.log(error);
  }
});



userRouter.post("/login", async (req, res) => {
  const { userName, password } = req.body();
  try {
    const existingUser = await UserModel.findOne({ userName });
    if (existingUser) {
      bcrypt.compare(password, existingUser.password, function (err, result) {
        // result == true
        if (result) {
          let token = jwt.sign({ userId: existingUser._id }, "json_secret");
          res.send({ message: "User login successful", token });
        } else {
          res.send({ message: "Entered wrong details" });
        }
      });
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = userRouter;
