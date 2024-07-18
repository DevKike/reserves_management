import { Role } from "./enums/Role";

export interface IUser {
  id: string;
  name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  role: Role;
}
