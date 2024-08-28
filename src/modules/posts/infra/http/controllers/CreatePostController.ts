import { CreatePostService } from "@modules/posts/services/CreatePostService";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

class CreatePostController {
  async handle(request: Request, response: Response) {
    const { title, content } = request.body;

    const createPostService = container.resolve(CreatePostService);

    const post = await createPostService.execute({ title, content });

    return response.status(200).json(post);
  }
}

export { CreatePostController };
