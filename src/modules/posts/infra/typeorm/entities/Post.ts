import { randomUUID } from "crypto";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

@Entity("posts")
class Post {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryColumn({ type: "uuid" })
  id: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @Column({ name: "created_by" })
  createdBy: string;

  @Column({ name: "updated_by" })
  updatedBy: string;

  @Column({ type: "varchar", length: "500" })
  title: string;

  @Column({ type: "varchar" })
  content: string;

  @Column({ name: "user_id", type: "uuid" })
  userId: string;
}

export { Post };
