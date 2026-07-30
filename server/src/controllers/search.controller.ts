import { Request, Response } from "express";
import { searchProperties } from "../services/search.service";

export async function searchPropertiesController(
    
  req: Request,
  res: Response
) {
  try {
    const properties = await searchProperties(req.query);

    res.status(200).json({
      success: true,
      data: properties,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to search properties",
    });
  }
}