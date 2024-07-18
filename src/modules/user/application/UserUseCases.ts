import { IUser } from "../domain/entity/IUser";
import { IUserService } from "../domain/service/IUserService";

export class UserUseCases {
  private _userService: IUserService;

  constructor(userService: IUserService) {
    this._userService = userService;
  }

  async createUser(user: IUser): Promise<void> {
    await this._userService.createUser(user);
  }
}
