import { inject, injectable } from "inversify";
import { PostRepository } from "../infra/typeorm/repositories/PostRepository";
import { CreatePostSchema } from "../schemas/CreatePostSchema";
import { createPostDTO } from "../dto/create-post.dto";

@injectable()
class CreatePostService {
  constructor(
    @inject("PostRepository")
    private _postRepository: PostRepository
  ) {}

  async execute({ title, content }: createPostDTO) {
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
