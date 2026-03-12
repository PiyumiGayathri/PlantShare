import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import Post from "../models/Post.js";

const router = express.Router();

// POST /api/posts (Protected)
router.post("/", protect, async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new Post({
      title,
      content,
      author: req.user._id // use _id, not id
    });

    const savedPost = await newPost.save();
    res.json(savedPost);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/posts (Public)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "username email") // use correct field
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;