import { IUser } from "../entities/IUser";

export interface IUserService {
  createUser(user: IUser): Promise<void>;
}
