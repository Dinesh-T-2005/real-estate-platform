import { Router } from "express";
import { loginController } from "../controllers/auth.controller";
import { register } from "../controllers/auth.controller";


const router = Router();

router.post("/login", loginController);
router.post("/register", register);

export default router;