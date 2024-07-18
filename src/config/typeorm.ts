import { DataSource } from "typeorm";
import { Constant } from "../utils/Constant";

export const AppDataSource = new DataSource({
  type: Constant.DB_TYPE as any,
  host: Constant.DB_HOST,
  port: Constant.DB_PORT as any,
  username: Constant.DB_USERNAME,
  password: Constant.DB_PASSWORD,
  database: Constant.DB_DATABASE_NAME,
  synchronize: false,
  entities: [],
  migrations: [],
});
