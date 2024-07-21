import { genSaltSync, compareSync, hashSync } from "bcrypt";

class Encrypt {
  private _saltRounds: number = 10;

  hashPassword(data: string): string {
    const salt = genSaltSync(this._saltRounds);
    return hashSync(data, salt);
  }

  comparePassword(plainPassword: string, hashedPassword: string): boolean {
    return compareSync(plainPassword, hashedPassword);
  }
}

export default new Encrypt();
