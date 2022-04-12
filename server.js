import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import subscriberRoute from "./routes/Subscriber.js";
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(err);
});
db.on("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use("/subscriber", subscriberRoute);

app.listen(3001, () => {
  console.log("Server listening at port 3001");
});
