import { Request, Response, Router } from "express";
import { ImplUserUseCase } from "../../application/ImplUserUseCase";

export class UserRouter {
  private readonly _userRouter: Router;
  private readonly _userUseCase: ImplUserUseCase;

  constructor(userUseCase: ImplUserUseCase) {
    this._userRouter = Router();
    this._userUseCase = userUseCase;
    this.initRoutes();
  }

  initRoutes(): Router {
    this._userRouter.post("/", async (req: Request, res: Response) => {
      try {
        const user = req.body;
        await this._userUseCase.createUser(user);

        res.status(201).json({
          message: "User created successfully",
        });
      } catch (error) {
        res.status(500).json({
          message: "An error ocurred",
        });
      }
    });
    return this._userRouter;
  }
}
