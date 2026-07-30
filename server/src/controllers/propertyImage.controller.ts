import { Request, Response } from "express";
import {
  addPropertyImages,
  getPropertyImages,
  deletePropertyImage,
} from "../services/propertyImage.service";

export async function uploadPropertyImages(
  req: Request,
  res: Response
) {
  try {
    const propertyId = req.params.propertyId as string;

    const images = (req.files as Express.Multer.File[]).map(
      (file) => `/uploads/${file.filename}`
    );

    await addPropertyImages(propertyId, images);

    res.json({
      success: true,
      message: "Gallery uploaded successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
}

export async function getGallery(
  req: Request,
  res: Response
) {
  try {
    const propertyId = req.params.propertyId as string;

    const images = await getPropertyImages(propertyId);

    res.json({
      success: true,
      data: images,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch gallery",
    });
  }
}

export async function removeGalleryImage(
  req: Request,
  res: Response
) {
  try {
    const id = req.params.id as string;

    await deletePropertyImage(id);

    res.json({
      success: true,
      message: "Image deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete image",
    });
  }
}