import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", isAuthenticated, createPost);
router.get("/getposts", getPosts);

export default router;
