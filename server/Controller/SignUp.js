import Register from "../Model/SignUp";
const bcrypt = require("bcryptjs");

export const signUp = async (req, res) => {
  const emailExist = await Register.findOne({ email: req.body.email });
  console.log(emailExist);
  if (emailExist) return res.status(400).send("Email already exist");
  //hashing the password
  const salt = await bcrypt.genSalt(10);
  console.log(salt);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new Register({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user_id });
  } catch (error) {
    res.status(400).send(err);
  }
};
