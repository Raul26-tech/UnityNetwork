import { UpdateUserService } from "@modules/users/services/UpdateUserService";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      name,
      email,
      password,
      type,
      gender,
      avatar,
      postalCode,
      street,
      number,
      district,
      state,
      complement,
      city,
      cellPhone,
      phone,
      status,
    } = request.body;

    const updateUserService = container.resolve(UpdateUserService);

    const updatedUser = await updateUserService.execute(id, {
      id,
      name,
      email,
      password,
      type,
      gender,
      avatar,
      postalCode,
      street,
      number,
      district,
      state,
      complement,
      city,
      cellPhone,
      phone,
      status,
    });

    return response.status(200).json(updatedUser);
  }
}

export { UpdateUserController };
