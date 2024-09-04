import { BaseRepository } from "@shared/infra/typeorm/repositories/BaseRepository";
import { EntityManager, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { injectable } from "inversify";
import { createPostDTO } from "@modules/posts/dto/create-post.dto";

@injectable()
class PostRepository extends BaseRepository {
  private _repository: Repository<Post>;

  constructor(menager?: EntityManager) {
    super(menager);
    this._repository = this.dataSource.getRepository(Post);
  }

  async create({ title, content }: createPostDTO) {
    const post = this._repository.create({
      title,
      content,
      commentCount: 0,
      likeCount: 0,
    });

    await this._repository.save(post);

    return post;
  }

  async find() {
    return await this._repository.find();
  }

  async findById(id: string) {
    return await this._repository.findOne({
      where: {
        id,
      },
    });
  }
}

export { PostRepository };
