import express from "express";
import {
  createComment,
  getPostComments,
  likeComment,
} from "../controllers/comment.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createComment);
router.post("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", isAuthenticated, likeComment);

export default router;
