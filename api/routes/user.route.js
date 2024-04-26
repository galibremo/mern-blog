import express from "express";
import { test, updateUser } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get("/test", test);
router.put("/update/:id", isAuthenticated,updateUser);

export default router;
