import { Request, Response } from "express";
import {
  getSettings,
  updateSettings,
} from "../services/settings.service";

export async function getSettingsController(
  req: Request,
  res: Response
) {
  try {
    const settings = await getSettings();

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load settings",
    });
  }
}

export async function updateSettingsController(
  req: Request,
  res: Response
) {
  try {
    const settings = await updateSettings(req.body);

    res.json({
      success: true,
      message: "Settings updated successfully",
      data: settings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update settings",
    });
  }
}