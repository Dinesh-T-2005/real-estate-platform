import { Router } from "express";
import healthRoutes from "./health.routes";
import authRoutes from "./auth.routes";
import propertyRoutes from "./property.routes";
import uploadRoutes from "./upload.routes";
import enquiryRoutes from "./enquiry.routes";
import dashboardRoutes from "./dashboard.routes";
import settingsRoutes from "./settings.routes";
import searchRoutes from "./search.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/search", searchRoutes);
router.use("/settings", settingsRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/enquiries", enquiryRoutes);
router.use("/properties", propertyRoutes);
router.use("/upload", uploadRoutes);
export default router;