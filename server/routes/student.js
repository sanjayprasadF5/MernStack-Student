import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Router is working");
});

export default routes;
