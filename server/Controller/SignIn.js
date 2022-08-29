const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import SignUp from "../Model/SignUp";

export const login = async (req, res) => {
  //validate the data
  // const error = signinValidation(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  //check if user already exists
  const confrimedUser = await SignUp.findOne({ email: req.body.email });
  console.log(confrimedUser);
  if (!confrimedUser) return res.status(400).send("Email is wrong");

  //check if password is wrong
  const confirmedPassword = bcrypt.compare(
    req.body.password,
    confirmedUser.password
  );
  if (!confirmedPassword) return res.status(400).send("wrong password");

  //create and assign a token
  const token = jwt.sign({ _id: confirmedUser._id }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  if (token) {
    res.header("auth-token", token).send(token);
  }
};
