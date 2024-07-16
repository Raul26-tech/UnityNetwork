import { inject, injectable } from "inversify";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";
import { NotFound } from "@shared/errors/NotFound";

@injectable()
class ListUserService {
  constructor(
    @inject("UserRepository")
    private _userRepository: UserRepository
  ) {}

  async execute(id: string) {
    const user = await this._userRepository.ListUser(id);

    if (!user) {
      throw new NotFound("Este usuário não foi encontrado.");
    }

    return user;
  }
}

export { ListUserService };
