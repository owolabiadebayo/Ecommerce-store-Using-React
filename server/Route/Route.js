const Router = require("express").Router();
import { signUp } from "../Controller/SignUp";
import { login } from "../Controller/SignIn";
import { product } from "../Controller/Product";
import { products } from "../Controller/Product";

Router.post("/product", product);
Router.post("/signUp", signUp);
Router.post("/signIn", login);
Router.get("/allproduct", products);

module.exports = Router;
