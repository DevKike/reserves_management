import express, { Application } from "express";
import { Constant } from "../utils/Constant";

export class App {
  private readonly _application: Application;

  constructor() {
    this._application = express();
  }

  public getApp(): Application {
    return this._application;
  }

  private setMiddlewares() {
    this._application.use(express.json());
    this._application.set("PORT", Constant.PORT);
  }
}
