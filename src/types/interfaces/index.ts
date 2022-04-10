import { ErrorCode } from "$types/enums";
import { NextFunction, Request, Response } from "express";

export interface IErrorObject {
  statusCode?: number;
  errorCode?: ErrorCode;
  errorMessage?: string;
  devMessage?: string;
}

export interface IRouteHandler {
  (req: Request, res: Response, next: NextFunction): Promise<any>;
}
