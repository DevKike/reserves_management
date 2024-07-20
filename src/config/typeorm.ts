import { DataSource } from "typeorm";
import { Constant } from "../utils/Constant";
import { User } from "../modules/user/infrastructure/entity/User";

export const appDataSource = new DataSource({
  type: Constant.DB_TYPE as any,
  host: Constant.DB_HOST,
  port: Constant.DB_PORT as any,
  username: Constant.DB_USERNAME,
  password: Constant.DB_PASSWORD,
  database: Constant.DB_NAME,
  synchronize: true,
  entities: [User],
  migrations: [__dirname + "../migrations/**/*.ts"],
});
