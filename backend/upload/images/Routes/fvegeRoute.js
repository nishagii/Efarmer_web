import express from "express";
import { addFreshVeges,listFreshVeges,removeFreshVeges,updateFreshVeges } from "../controllers/fvegeController.js";
import multer from "multer";

const fvegeRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${Date.now()}${file.originalname}`)
  },
});

const upload = multer({ storage: storage });

fvegeRouter.post("/upload", upload.single("image"), addFreshVeges);
fvegeRouter.get("/list", listFreshVeges);
fvegeRouter.post("/delete", removeFreshVeges);
fvegeRouter.post("/update", upload.single("image"), updateFreshVeges);

 















export default fvegeRouter;