import { ReadPostService } from "@modules/posts/services/read-post-service";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

export class ReadPostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const readPostService = container.resolve(ReadPostService);

    const post = readPostService.execute(id);

    return response.status(200).json(post);
  }
}
