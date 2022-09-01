import Register from "../Model/SignUp";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();


export const signUp = async (req, res) => {

  const emailExist = await Register.findOne({ email: req.body.email });

  if (emailExist) return res.status(400).send("Email already exist");
  //hashing the password
  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(req.body.password, salt);
 
  const {
    firstName,
    lastName,
    email,
    confirm,
  } = req.body;
  

  const user = await Register.create({
    email,
    password: hashPassword,
    firstName,
    lastName,
    confirm,
  });
 
  //Create Token
  const token = jwt.sign(
    { user_id: user._id, email },
    process.env.TOKEN_SECRET,
    {
      expiresIn: "2h",
    }
  );
  // save user token
  user.token = token;
 

  try {
  //  const users = await user.save();
    res.status(201).json(user.token);
  } catch (err) {
    res.status(400).send(err);
  }
};
