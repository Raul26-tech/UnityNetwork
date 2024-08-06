import { User } from "@modules/users/infra/typeorm/entities/User";
import { randomUUID } from "crypto";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
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

  @Column({ name: "created_by", type: "varchar" })
  createdBy: string;

  @Column({ name: "updated_by", type: "varchar" })
  updatedBy: string;

  @Column({ type: "varchar", length: "500" })
  title: string;

  @Column({ type: "varchar" })
  content: string;

  @Column({ name: "like_count", type: "float" })
  likeCount: number;

  @Column({ name: "comment_count", type: "float" })
  commentCount: number;

  @Column({ name: "user_id", type: "uuid" })
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: string;
}

export { Post };
