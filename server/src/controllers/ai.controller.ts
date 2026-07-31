import { Request, Response } from "express";
import {
  generatePropertyDescription,
  chatWithAI,
} from "../services/ai.service";

// =========================================
// Generate Property Description
// =========================================

export async function generatePropertyDescriptionController(
  req: Request,
  res: Response
) {
  try {
    const description =
      await generatePropertyDescription(req.body);

    res.json({
      success: true,
      description,
    });
  } catch (error: any) {
    console.error("AI Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "AI generation failed",
    });
  }
}

// =========================================
// AI Chat
// =========================================

export async function chatController(
  req: Request,
  res: Response
) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const reply = await chatWithAI(message);

    res.json({
      success: true,
      reply,
    });
  } catch (error: any) {
    console.error("AI Chat Error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "AI chat failed",
    });
  }
}