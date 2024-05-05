import express from "express";
import {
  deleteUser,
  getUsers,
  test,
  updateUser,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.js";
import { signOut } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", test);
router.put("/update-user-info/:id", isAuthenticated, updateUser);
router.delete("/delete-user/:id", isAuthenticated, deleteUser);
router.post("/signout", signOut);
router.get("/getusers", isAuthenticated, getUsers);

export default router;
