import { app } from "./app/app";
import { Constant } from "./utils/Constant";
import { AppDataSource } from "./config/typeorm";

app.listen(Constant.PORT, async () => {
  try {
    await AppDataSource.initialize();
    console.log(`Server running at port: ${Constant.PORT}`);
    console.log("Data source has been initialized!");
  } catch (error) {
    throw error;
  }
});
