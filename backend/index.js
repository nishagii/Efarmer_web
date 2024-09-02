import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import fvegeRouter from "./Routes/fvegeRoute.js";
import userRouter from "./Routes/userRoute.js";
import 'dotenv/config';

//app configuration
const app = express();
const port = 4000;

//middleware
app.use(express.json()); // Every request that comes in will be in JSON format
app.use(cors()); // To allow cross-origin requests

//database connection
connectDB();

//api endpoints

app.use("/api/fvege", fvegeRouter)
app.use("/images", express.static("upload/images"));
app.use("api/user", userRouter);
























app.get("/", (req, res) => {
  res.send("Express App is Running uttooo");
});

//running the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
