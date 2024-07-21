import { App } from "./app/App";
import { appDataSource } from "./config/typeorm";
import { ImplUserUseCase } from "./modules/user/application/ImplUserUseCase";
import { IUserRepository } from "./modules/user/domain/repository/IUserRepository";
import { IUserService } from "./modules/user/domain/service/IUserService";
import { ImplUserRepository } from "./modules/user/infrastructure/repository/ImplUserRepository";
import { ImplUserService } from "./modules/user/infrastructure/service/ImplUserService";
import { RouterManager } from "./modules/user/RouterManager";

class Server {
  private _app: App;
  private _userRepository: IUserRepository;
  private _userService: IUserService;
  private _userUseCase: ImplUserUseCase;
  private _routerManager: RouterManager;

  constructor() {
    this._app = new App();
    this._userRepository = new ImplUserRepository(appDataSource);
    this._userService = new ImplUserService(this._userRepository);
    this._userUseCase = new ImplUserUseCase(this._userService);
    this._routerManager = new RouterManager(this._app.getApp(), this._userUseCase);
  }

  private async initDataSource(): Promise<void> {
    try {
      await appDataSource.initialize();
      console.log("Data source has been initialized!");
    } catch (error) {
      console.error("Error during Data Source initialization: ", error);
    }
  }

  private startServer(): void {
    const application = this._app.getApp();
    this._routerManager.manageRoutes();
    
    application.listen(application.get("PORT"), () => {
      try {
        console.log(`Server running at port: ${application.get("PORT")}`);
      } catch (error) {
        console.error("Error during server initialization: ", error);
      }
    });
  }

  public async init(): Promise<void> {
    await this.initDataSource();
    this.startServer();
  }
}

const server = new Server();
server.init();
