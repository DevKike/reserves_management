import { IUser } from "../entities/IUser";

export interface IUserRepository {
  create(user: IUser): Promise<void>;
}
