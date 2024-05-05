import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", isAuthenticated, createPost);
router.get("/getposts", getPosts);
router.delete("/deletepost/:postId/:userId", isAuthenticated, deletePost);
router.put("/updatepost/:postId/:userId", isAuthenticated, updatePost);

export default router;
