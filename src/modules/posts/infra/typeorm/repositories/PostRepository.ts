import { BaseRepository } from "@shared/infra/typeorm/repositories/BaseRepository";
import { EntityManager, Repository } from "typeorm";
import { Post } from "../entities/Post";
import { ICreatePostDTO } from "@modules/posts/dto/ICreatePost";
import { injectable } from "inversify";

@injectable()
class PostRepository extends BaseRepository {
  private _repository: Repository<Post>;

  constructor(menager?: EntityManager) {
    super(menager);
    this._repository = this.dataSource.getRepository(Post);
  }

  async create({ title, content }: ICreatePostDTO) {
    const post = this._repository.create({
      title,
      content,
      commentCount: 0,
      likeCount: 0,
    });

    await this._repository.save(post);

    return post;
  }
}

export { PostRepository };
