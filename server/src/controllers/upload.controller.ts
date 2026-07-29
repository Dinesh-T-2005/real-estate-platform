import { Request, Response } from "express";

export const uploadImage = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    res.status(200).json({
      success: true,
      image: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Image upload failed",
    });
  }
};