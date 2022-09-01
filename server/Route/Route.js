const Router = require("express").Router();
const formidable = require("express-formidable");

import { signUp } from "../Controller/SignUp";
import { login } from "../Controller/SignIn";
import { product } from "../Controller/Product";
import { products } from "../Controller/Product";
import {requiresignin} from "../Middleware/index"


Router.post("/product",requiresignin, formidable(), product);
Router.post("/signup", signUp);
Router.post("/signIn",requiresignin, login);
Router.get("/allproduct", products);


module.exports = Router;