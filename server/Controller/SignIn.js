const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import SignUp from "../Model/SignUp";
require("dotenv").config();


export const login = async (req, res) => {

 try{
  //check if user already exists
  const confrimedUser = await SignUp.findOne({ email: req.body.email });
  
  if (!confrimedUser) return res.status(400).send("Email is wrong");
  //check if password is wrong
  const confirmedPassword = bcrypt.compare(
    req.body.password,
    confrimedUser.password
  );
  console.log(confirmedPassword);
  if (!confirmedPassword) return res.status(400).send("wrong password");

  //create and assign a token
  const token = jwt.sign({ _id: confrimedUser._id }, process.env.TOKEN_SECRET, {
    expiresIn: "2h",
  });
  if (token) {
    res.header("auth-token", token).send(token);
    
  }} catch (err){
    console.log(err);
  }
}
