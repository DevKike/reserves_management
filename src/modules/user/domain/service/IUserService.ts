import { IUser } from "../entity/IUser";

export interface IUserService {
  createUser(user: IUser): Promise<void>;
}
