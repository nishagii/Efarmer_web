import mongoose from "mongoose";


export const connectDB = async () => {
  // Database connection
  const mongoURI = "mongodb://127.0.0.1:27017/efarmer";

  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}