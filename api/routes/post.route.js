import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", isAuthenticated, createPost);

export default router;
