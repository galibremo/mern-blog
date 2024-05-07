import express from "express";
import {
  createComment,
  getPostComments,
} from "../controllers/comment.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createComment);
router.post("/getpostcomments/:postId", getPostComments);

export default router;
