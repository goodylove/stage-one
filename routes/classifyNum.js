import express from "express";
import getFunNumbers from "../controller/classifyNumber.js";
const Router = express.Router();

Router.get("/", getFunNumbers);

export default Router;
