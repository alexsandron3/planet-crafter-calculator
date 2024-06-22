import { Request, Response } from "express";
import HTTP_STATUS_CODES from "../constants/httpStatusCodes";
export function Convert(req: Request, res: Response): Response {
  return res.status(HTTP_STATUS_CODES.OK).json({ message: "Works" });
}
