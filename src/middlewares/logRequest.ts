import log from "$helpers/log";
import { NextFunction, Request, Response } from "express";

const logger = log("Request");

export default function logRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const method = req.method;
  const fullPath = req.originalUrl;
  const body = req.body || [];

  const { oldPassword, newPassword, password, refreshToken, ...params } = body;

  logger.info(
    `Method: ${method} | FullPath: ${fullPath} | Body: ${JSON.stringify(
      params
    )}`
  );
  return next();
}
