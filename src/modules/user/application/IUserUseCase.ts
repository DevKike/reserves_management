import { IUser } from "../domain/entity/IUser";

export interface IUserUseCase {
  createUser(user: IUser): Promise<void>;
}
