import { ListUserService } from "@modules/users/services/ListUserService";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

class ListUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listUserService = container.resolve(ListUserService);

    const user = await listUserService.execute(id);

    return response.status(200).json(user);
  }
}

export { ListUserController };
