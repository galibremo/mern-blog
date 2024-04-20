import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/ErrorHandler.js";
import sendToken from "../utils/JwtToken.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }
  const userEmail = await User.findOne({ email });
  if (userEmail) return next(errorHandler(404, "User already exists"));

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "Signin Successfull!",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    if (validUser) {
      var getPassword = await User.findOne({ email }).select("+password");
    }
    const validPassword = await getPassword.comparePassword(password);
    if (!validPassword) return next(errorHandler(401, "Wrong credentials!"));
    sendToken(validUser, 200, res);
  } catch (error) {
    next(error);
  }
};
