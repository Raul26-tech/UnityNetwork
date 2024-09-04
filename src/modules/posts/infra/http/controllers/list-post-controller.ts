import { ListPostService } from "@modules/posts/services/list-post-service";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

export class ListPostController {
  async handle(request: Request, response: Response) {
    const listPost = container.resolve(ListPostService);

    const post = listPost.execute();

    return response.status(200).json(post);
  }
}
