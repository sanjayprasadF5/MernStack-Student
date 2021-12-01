import express from "express";
import bodyParser from "body-Parser";
import mongoose from "mongoose";
import cors from "cors";

import studentRoutes from "./routes/student.js";

const app = express();

app.use("/student", studentRoutes);

app.use(bodyParser.json({ limit: "20mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://sanjayprasad:HiddenLeaf@student.8brax.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connection is establish: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
