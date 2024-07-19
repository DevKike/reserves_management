import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "../../domain/entity/IUser";
import { Role } from "../../domain/enums/Role";

@Entity({ name: "users" })
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 10 })
  name: string;

  @Column({ type: "varchar", length: 20 })
  last_name: string;

  @Column({ type: "varchar", length: 20 })
  phone_number: string;

  @Column({ type: "varchar", length: 35 })
  email: string;

  @Column({ type: "varchar", length: 100 })
  password: string;

  @Column({ type: "varchar", length: 5 })
  role: Role;
}
