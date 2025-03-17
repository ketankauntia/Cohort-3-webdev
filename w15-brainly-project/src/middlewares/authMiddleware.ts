import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    req.user = { id: decoded.id }; // Attach userId to req.user
    // req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};
