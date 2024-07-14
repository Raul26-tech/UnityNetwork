import { inject, injectable } from "inversify";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { NotFound } from "@shared/errors/NotFound";
import { BadRequest } from "@shared/errors/BadRequest";

@injectable()
class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private _userRepository: UserRepository
  ) {}

  async execute(
    id: string,
    {
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
    }: IUpdateUserDTO
  ) {
    const user = await this._userRepository.findById(id);

    if (!user) {
      throw new NotFound("Nenhum usuário foi encontrado com esse e-mail!");
    }

    if (user.status === "inactive" || user.status === "pending") {
      throw new BadRequest(
        `Usuários com status ${user.status} não podem ser alterados.`
      );
    }


    if (user.avatar) {
      const verifyExtensions = user.avatar.split("/");

      console.log("Extensão Aqui: ", verifyExtensions);
    }

    console.log(user.avatar);

    const updatedUser = await this._userRepository.update(id, {
      name,
      email,
      avatar,
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
