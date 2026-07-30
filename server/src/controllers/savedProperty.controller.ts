import { Request, Response } from "express";

import {
  saveProperty,
  getSavedProperties,
  removeSavedProperty,
} from "../services/savedProperty.service";

export async function savePropertyController(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;
    const propertyId = String(req.params.propertyId);

    const data = await saveProperty(
      userId,
      propertyId
    );

    res.json({
      success: true,
      message: "Property saved successfully",
      data,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        error.code === "P2002"
          ? "Already saved"
          : "Failed to save property",
    });
  }
}

export async function getSavedPropertiesController(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;

    const data = await getSavedProperties(
      userId
    );

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load saved properties",
    });
  }
}

export async function removeSavedPropertyController(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;
    const propertyId = String(req.params.propertyId);

    await removeSavedProperty(
      userId,
      propertyId
    );

    res.json({
      success: true,
      message: "Property removed successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to remove property",
    });
  }
}