import { CMSMiddlewares, ControllerApp } from "$types/enums";
import { IRouteHandler } from "$types/interfaces";
import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  Router,
} from "express";
import log from "./log";
import { done } from "./response";

export const rootRoute = Router();

export default class AppRoute {
  private _name: string;
  private _basePath: string;
  private _authDefault: RequestHandler;

  constructor(name: ControllerApp, basePath: string = "") {
    this._name = name;
    this._basePath = basePath;

    // if (this._name === ControllerApp.CMS) {
    //   this._basePath = "/api/" + this._basePath;
    //   // this._authDefault =
    // }
  }

  public post(path: string, handler: IRouteHandler, useMiddlewares?) {
    let middlewares = [];

    console.log(this.getPath(path));
    rootRoute.post(this.getPath(path), middlewares, handler);
  }

  public getPath(path: string) {
    return `/${this._basePath}/${path}`.replace("//", "/");
  }
}

function wrapper(handler: IRouteHandler, routeName: string): RequestHandler {
  handler;
}
