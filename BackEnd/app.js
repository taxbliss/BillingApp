import express from "express";
import db from "./models/connect.js";

db();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello welcome to Taxbliss App");
});

app.listen(PORT, () => {
  console.log(`server running on  port ${PORT}`);
});
