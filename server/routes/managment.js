import { Router } from "express";
import { getAdmins, getUserPerformance } from "../controllers/managemant.js";

const router = Router();

router.get("/admin", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
