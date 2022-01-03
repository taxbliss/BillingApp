import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

const URI = process.env.MONGO_URI;
mongoose.connect(URI);

const InvSchema = mongoose.Schema({
  InvNo: String,
  InvDate: String,
  CustomerName: String,
  InvValue: Number,
});

const InvModel = mongoose.model("InvModel", InvSchema);

app.post("/Inv", async (req, res) => {
  const Inv = new InvModel(req.body);
  try {
    await Inv.save();
    res.send(Inv);
  } catch (e) {
    console.log(e);
  }
});

app.listen(3500, () => {
  console.log("App runnung on port 3500");
});
