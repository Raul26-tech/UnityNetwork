import { inject, injectable } from "inversify";
import { PostRepository } from "../infra/typeorm/repositories/PostRepository";
import { ICreatePostDTO } from "../dto/ICreatePost";
import { CreatePostSchema } from "../schemas/CreatePostSchema";

@injectable()
class CreatePostService {
  constructor(
    @inject("PostRepository")
    private _postRepository: PostRepository
  ) {}

  async execute({ title, content }: ICreatePostDTO) {
    // Validando as entradas
    CreatePostSchema.parse({ title, content });

    const createPost = await this._postRepository.create({
      title,
      content,
    });

    return createPost;
  }
}

export { CreatePostService };
