import { config } from "dotenv";
config();

export class Constant {
  // Server
  static readonly PORT = process?.env?.PORT || 3001;

  // Database
  static readonly DB_TYPE = process?.env?.DB_TYPE || "mysql";
  static readonly DB_HOST = process?.env?.DB_HOST;
  static readonly DB_PORT = process?.env?.DB_PORT;
  static readonly DB_USERNAME = process?.env?.DB_USERNAME;
  static readonly DB_PASSWORD = process?.env?.DB_PASSWORD;
  static readonly DB_NAME = process?.env?.DB_NAME;
}
