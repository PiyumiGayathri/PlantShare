import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";

const router = express.Router();

// GET /api/profile
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;