import AppRoute from "$helpers/route";
import { validate } from "$helpers/validate";
import { ControllerApp } from "$types/enums";
import { loginSchema } from "$validators/auth";
import { NextFunction, Request, Response } from "express";
import AuthService from "./auth.service";

const AuthController = new AppRoute(ControllerApp.CMS, "auth");
const authService = new AuthService();

AuthController.post(
  "register",
  async (req: Request, res: Response, next: NextFunction) => {
    return await authService.register(req.body);
    // res.status(400).send(await authService.register(req.body));
  }
);

AuthController.post("login", async (req: Request) => {
  validate(loginSchema, req.body);
  return await authService.login(req.body);
});
