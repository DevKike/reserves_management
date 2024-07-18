import { IUser } from "../entity/IUser";

export interface IUserRepository {
  create(user: IUser): Promise<void>;
}
