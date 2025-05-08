
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    
    const decoded = await jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    
    // Attach the full user object, not just ID
    req.user = await User.findById(decoded.userId).select('-password');
    if (!req.user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }
    
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Not authorized",
      success: false,
    });
  }
};