import { Request, Response } from "express";
import { getUserEnquiries } from "../services/userEnquiry.service";

export async function getMyEnquiries(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;

    const enquiries = await getUserEnquiries(userId);

    res.json({
      success: true,
      data: enquiries,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });

  }
}