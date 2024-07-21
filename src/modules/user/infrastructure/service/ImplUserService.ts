import Encrypt from "../../../../utils/Encrypt";
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
      const hashedPassword = Encrypt.hashPassword(user.password);
      const newUser = { ...user, password: hashedPassword };
      await this._userRepository.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}
