import { inject, injectable } from "inversify";
import { PostRepository } from "../infra/typeorm/repositories/PostRepository";
import { NotFound } from "@shared/errors/NotFound";

@injectable()
export class ListPostService {
  constructor(
    @inject("PostRepository")
    private _postRepository: PostRepository
  ) {}

  async execute() {
    const posts = await this._postRepository.find();

    if (!posts) {
      throw new NotFound("Nenhum post encontrado!");
    }

    return posts;
  }
}
