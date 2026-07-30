import { Request, Response } from "express";
import {
  createEnquiry,
  getAllEnquiries,
  deleteEnquiry,
  updateEnquiryStatus,
} from "../services/enquiry.service";

export async function createEnquiryController(
  req: Request,
  res: Response
) {
  try {
    const userId = (req as any).user.id;

    const enquiry = await createEnquiry(
      userId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: "Enquiry created successfully",
      data: enquiry,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getAllEnquiriesController(
  req: Request,
  res: Response
) {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const result = await getAllEnquiries(
      page,
      limit
    );
    res.json({
      success: true,
      ...result,
    });

  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


export async function deleteEnquiryController(
  req: Request,
  res: Response
) {
  try {
    await deleteEnquiry(req.params.id as string);

    res.json({
      success: true,
      message: "Enquiry deleted successfully",
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateEnquiryStatusController(
  req: Request,
  res: Response
) {
  try {
    const enquiry = await updateEnquiryStatus(
      req.params.id as string,
      req.body.status
    );

    res.json({
      success: true,
      data: enquiry,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}