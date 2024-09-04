import { inject, injectable } from "inversify";
import { PostRepository } from "../infra/typeorm/repositories/PostRepository";
import { NotFound } from "@shared/errors/NotFound";

@injectable()
export class ReadPostService {
  constructor(
    @inject("PostRepository")
    private _postRepository: PostRepository
  ) {}

  async execute(id: string) {
    const post = await this._postRepository.findById(id);

    if (!post) {
      throw new NotFound("O post informado não foi encontrado!");
    }

    return post;
  }
}
