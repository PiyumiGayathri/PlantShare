import express from "express";
import { loginUser, registerUser } from "../controllers/AuthController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.json({
    message: "You accessed protected route",
    userId: req.user
  });
});

export default router;