import { IUser } from "../../domain/entity/IUser";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { IUserService } from "../../domain/service/IUserService";

export class ImplUserService implements IUserService {
  private _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async createUser(user: IUser): Promise<void> {
    try {
      await this._userRepository.create(user);
    } catch (error) {
      throw error;
    }
  }
}
