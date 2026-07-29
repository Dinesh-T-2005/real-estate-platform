import { Router } from "express";
import { createEnquiryController,  getAllEnquiriesController, } from "../controllers/enquiry.controller";

const router = Router();

router.post("/", createEnquiryController);
router.get("/", getAllEnquiriesController);
export default router;