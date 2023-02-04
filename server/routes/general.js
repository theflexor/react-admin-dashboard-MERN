import { Router } from "express";
import { GetDashboardStats, GetUser } from "../controllers/general.js";

const router = Router();

router.get("/user/:id", GetUser);
router.get("/dashboard", GetDashboardStats);

export default router;
