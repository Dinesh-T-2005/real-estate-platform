import { Request, Response } from "express";
import { createEnquiry,getAllEnquiries, } from "../services/enquiry.service";

export async function createEnquiryController(
  req: Request,
  res: Response
) {
  try {
    const enquiry = await createEnquiry(req.body);

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
    const enquiries = await getAllEnquiries();

    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error: any) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}