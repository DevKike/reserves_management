import { App } from "./app/app";
import { appDataSource } from "./config/typeorm";
import { IUserRepository } from "./modules/user/domain/repository/IUserRepository";
import { IUserService } from "./modules/user/domain/service/IUserService";
import { ImplUserRepository } from "./modules/user/infrastructure/repository/ImplUserRepository";
import { ImplUserService } from "./modules/user/infrastructure/service/ImplUserService";

class Server {
  private _app: App;
  private _userRepository: IUserRepository;
  private _userService: IUserService;

  constructor(
    _app: App,
    _userRepository: IUserRepository,
    _userService: IUserService
  ) {
    this._app = _app;
    this._userRepository = _userRepository;
    this._userService = _userService;
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

const app = new App();
const userRepository = new ImplUserRepository(appDataSource);
const userService = new ImplUserService(userRepository);

const server = new Server(app, userRepository, userService);
server.init();
