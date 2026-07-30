import { Router } from "express";
import multer from "multer";
import path from "path";

import {
  uploadPropertyImages,
  getGallery,
  removeGalleryImage,
} from "../controllers/propertyImage.controller";

const router = Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

router.post(
  "/:propertyId",
  upload.array("images", 10),
  uploadPropertyImages
);

router.get("/:propertyId", getGallery);

router.delete("/:id", removeGalleryImage);

export default router;
