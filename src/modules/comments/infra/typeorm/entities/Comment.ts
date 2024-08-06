import { Post } from "@modules/posts/infra/typeorm/entities/Post";
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

@Entity("comments")
class Comments {
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

  @Column({ name: "content", type: "varchar" })
  content: string;

  @Column({ name: "user_id", type: "uuid" })
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  userId: string;

  @Column({ name: "post_id", type: "uuid" })
  @ManyToOne(() => Post)
  @JoinColumn({ name: "post_id" })
  postId: string;
}

export { Comments };
