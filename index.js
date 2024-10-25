import express from "express";
import connectDB from "./config/db.js";
import "dotenv/config";

const app = express();
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "PDF Conversion Service",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT: ${process.env.PORT}`);
});
