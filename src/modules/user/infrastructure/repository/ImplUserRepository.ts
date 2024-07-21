import { DataSource, Repository } from "typeorm";
import { IUser } from "../../domain/entity/IUser";
import { User } from "../entity/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { appDataSource } from "../../../../config/typeorm";

export class ImplUserRepository implements IUserRepository {
  private _userRepository: Repository<User>;

  constructor(dataSource: DataSource = appDataSource) {
    this._userRepository = dataSource.getRepository(User);
  }

  async save(user: IUser): Promise<void> {
    await this._userRepository.save(user);
  }
}
