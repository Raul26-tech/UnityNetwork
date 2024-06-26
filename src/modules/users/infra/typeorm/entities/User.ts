import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
class User {
  constructor() {
    this.id = uuidv4();
  }

  @PrimaryColumn({ type: "uuid" })
  id: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar" })
  email: string;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  type: string;

  @Column({ type: "varchar" })
  gender: string;

  @Column({ type: "varchar" })
  status: string;

  @Column({ type: "varchar" })
  avatar: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ name: "cell_phone", type: "varchar" })
  cellPhone: string;

  @Column({ name: "postal_code", type: "varchar" })
  postalCode: string;

  @Column({ type: "varchar" })
  street: string;

  @Column({ type: "varchar" })
  number: string;

  @Column({ type: "varchar" })
  complement: string;

  @Column({ type: "varchar" })
  district: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  state: string;
}

export { User };
