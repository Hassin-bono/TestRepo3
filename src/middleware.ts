import { validateInput } from "./validation";
import { Request, Response, NextFunction } from "express";

export function requestValidationMiddleware(req: Request, res: Response, next: NextFunction) {
  const queryParam = req.query.q as string;
  if (queryParam && !validateInput(queryParam)) {
    return res.status(400).json({ error: "Invalid query" });
  }
  next();
}
