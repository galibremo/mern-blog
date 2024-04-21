import express from "express";
import { getuser, signup } from "../controllers/auth.controller.js";
import { signin } from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.get("/getuser", isAuthenticated, getuser);
router.post("/signin", signin);

export default router;
