import { IUser } from "../entity/IUser";

export interface IUserRepository {
  save(user: IUser): Promise<void>;
}
