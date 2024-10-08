import { EntityManager, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDTO } from "../../../dto/ICreateUserDTO";
import { BaseRepository } from "@shared/infra/typeorm/repositories/BaseRepository";
import { injectable } from "inversify";
import { IUpdateUserDTO } from "@modules/users/dto/IUpdateUserDTO";

@injectable()
class UserRepository extends BaseRepository {
  private _repository: Repository<User>;

  constructor(manager?: EntityManager) {
    super(manager);
    this._repository = this.dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    gender,
    status,
    type,
    avatar,
    cellPhone,
    phone,
    postalCode,
    street,
    number,
    complement,
    district,
    city,
    state,
  }: ICreateUserDTO) {
    const user = this._repository.create({
      name,
      email,
      password,
      gender,
      status,
      type,
      avatar,
      cellPhone,
      phone,
      postalCode,
      street,
      number,
      district,
      complement,
      city,
      state,
    });

    await this._repository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this._repository.findOne({
      where: { email },
    });

    return user;
  }

  async findById(id: string) {
    const user = await this._repository.findOneBy({
      id,
    });

    return user;
  }

  async update(
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
    const user = await this._repository.findOne({ where: { id } });

    user.createdAt = user.createdAt;
    user.updatedAt = user.updatedAt;
    user.name = name;
    user.email = email;
    user.password = password;
    user.gender = gender;
    user.postalCode = postalCode;
    user.status = status;
    user.type = type;
    user.avatar = avatar;
    user.cellPhone = cellPhone;
    user.phone = phone;

    // Address
    user.postalCode = postalCode;
    user.street = street;
    user.number = number;
    user.complement = complement;
    user.district = district;
    user.city = city;
    user.state = state;

    const userUpdated = await this._repository.save(user);

    return userUpdated;
  }

  async listUsers() {
    const users = await this._repository.find();

    return users;
  }

  async ListUser(id: string) {
    const user = await this._repository.findOne({ where: { id } });

    return user;
  }
}

export { UserRepository };
