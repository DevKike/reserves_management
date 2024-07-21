import { Application } from "express";
import { UserRouter } from "./infrastructure/driving/UserRouter";
import { ImplUserUseCase } from "./application/ImplUserUseCase";

export class RouterManager {
  private _app: Application;
  private _userUseCase: ImplUserUseCase;

  constructor(app: Application, userUseCase: ImplUserUseCase) {
    this._app = app;
    this._userUseCase = userUseCase;
  }

  manageRoutes(): void {
    const userRouter = new UserRouter(this._userUseCase);
    this._app.use("/users", userRouter.initRoutes());
  }
}
