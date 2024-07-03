import { UpdateUserService } from "@modules/users/services/UpdateUserService";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUserService = container.resolve(UpdateUserService);

    const { id } = request.params;
    const {
      name,
      email,
      password,
      type,
      gender,
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

    const updatedUser = await updateUserService.execute({
      id,
      name,
      email,
      password,
      type,
      gender,
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
