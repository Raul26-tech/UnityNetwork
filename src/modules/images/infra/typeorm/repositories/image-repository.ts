import { EntityManager, Repository } from "typeorm";
import { Image } from "../entities/Image";
import { BaseRepository } from "@shared/infra/typeorm/repositories/BaseRepository";
import { createImageDTO } from "@modules/images/dto/create-image.dto";

export class ImageRepository extends BaseRepository {
  private _repository: Repository<Image>;

  constructor(menager?: EntityManager) {
    super(menager);
    this._repository = this.dataSource.getRepository(Image);
  }

  async create(data: createImageDTO[]) {
    const images = this._repository.create(data);

    return await this._repository.save(images);
  }
}
