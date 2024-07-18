import { IUser } from "../domain/entities/IUser";
import { IUserService } from "../domain/services/IUserService";

export class UserUseCases {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  async createUser(user: IUser): Promise<void> {
    await this._userService.createUser(user);
  }
}
