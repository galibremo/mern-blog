import express from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  likeComment,
} from "../controllers/comment.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/create", isAuthenticated, createComment);
router.post("/getpostcomments/:postId", getPostComments);
router.put("/likecomment/:commentId", isAuthenticated, likeComment);
router.put("/editcomment/:commentId", isAuthenticated, editComment);
router.delete("/deletecomment/:commentId", isAuthenticated, deleteComment);

export default router;
