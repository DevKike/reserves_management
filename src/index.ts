import { app } from "./app/app";
import { Constant } from "./utils/Constant";
import { appDataSource } from "./config/typeorm";
import { ImplUserRepository } from "./modules/user/infrastructure/repository/ImplUserRepository";
import { ImplUserService } from "./modules/user/infrastructure/service/ImplUserService";

app.listen(Constant.PORT, async () => {
  try {
    console.log(`Server running at port: ${Constant.PORT}`);
    await appDataSource.initialize();
    console.log("Data source has been initialized!");

    const userRepository = new ImplUserRepository(appDataSource);
    const userService = new ImplUserService(userRepository);
  } catch (error) {
    throw error;
  }
});
