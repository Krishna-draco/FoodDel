import {
  addfood,
  listFood,
  removefood,
} from "../controllers/foodController.js";
import express from "express";
import multer from "multer";

const foodRouter = express.Router();

//Image storage method
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addfood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removefood);

export default foodRouter;
