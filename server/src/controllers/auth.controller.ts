import { Request, Response } from "express";
import { registerUser } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const result = await registerUser();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};