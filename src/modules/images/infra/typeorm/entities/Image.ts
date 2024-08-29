import { Post } from "@modules/posts/infra/typeorm/entities/Post";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { randomUUID } from "crypto";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("images")
export class Image {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: "order", type: "int" })
  order: number;

  @Column({ name: "url", type: "varchar" })
  url: string;

  @ManyToOne(() => Post)
  @JoinColumn({ name: "post_id" })
  postId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt: Date;
}
