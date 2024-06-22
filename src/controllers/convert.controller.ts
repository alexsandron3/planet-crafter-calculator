import { Request, Response } from "express";

export function Convert(req: Request, res: Response): Response {
  return res.json({ message: "Convert route" });
}
