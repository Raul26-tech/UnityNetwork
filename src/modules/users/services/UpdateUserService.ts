import { inject, injectable } from "inversify";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { AppError } from "@shared/errors/AppError";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private _userRepository: UserRepository
  ) {}

  async execute({
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
  }: IUpdateUserDTO) {
    const userExists = await this._userRepository.findByEmail(email);

    if (!userExists) {
      throw new AppError("Nenhum usuário foi encontrado com esse e-mail!");
    }

    if (userExists.status === "pending") {
      throw new AppError(
        `Usuários com status ${userExists.status} não podem ser alterados, stive seu usuário e tente novamente`
      );
    }

    const updatedUser = await this._userRepository.update({
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

    return updatedUser;
  }
}

export { UpdateUserService };
