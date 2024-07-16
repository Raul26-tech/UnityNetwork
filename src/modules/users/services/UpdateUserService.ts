import { inject, injectable } from "inversify";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";
import { NotFound } from "@shared/errors/NotFound";
import { BadRequest } from "@shared/errors/BadRequest";
import { ForBidden } from "@shared/errors/Forbidden";

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
    let picture = avatar;

    if (!user) {
      throw new NotFound("Nenhum usuário foi encontrado com esse e-mail!");
    }

    if (user.status === "inactive" || user.status === "pending") {
      throw new BadRequest(
        `Usuários com status ${user.status} não podem ser alterados.`
      );
    }

    if (picture) {
      const data = picture.split(".");
      const extensionName = data[data.length - 1];
      const permittedExtensions = ["jpg", "png", "jpeg", "svg"];

      console.log({ data, extensionName, permittedExtensions });

      if (permittedExtensions.indexOf(extensionName) === -1) {
        throw new ForBidden(
          `Arquivo no formato ${extensionName} é inválido. Somente arquivos com as extensões ${permittedExtensions} são válidos`
        );
      }

      console.log(data[data.length - 1]);
    }

    const updatedUser = await this._userRepository.update(id, {
      name,
      email,
      avatar: picture,
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
