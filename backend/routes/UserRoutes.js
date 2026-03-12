import express from "express";
import User from "../models/User.js";
import Post from "../models/Post.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {

    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const posts = await Post.find({ author: req.params.id })
      .populate("author", "username")
      .sort({ createdAt: -1 });

    res.json({
      user,
      posts
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;