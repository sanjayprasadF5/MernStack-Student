import express from "express";
import { getStudent, createStudent } from "../controllers/student.js";
import student from "../models/student.js";
const routes = express.Router();

routes.get("/", getStudent);
routes.get("/", createStudent);

export default routes;
