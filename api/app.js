import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use("/api/user", userRouter);

export default app;
