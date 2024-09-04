import { inject, injectable } from "inversify";
import { createImageDTO } from "../dto/create-image.dto";
import { ForBidden } from "@shared/errors/Forbidden";
import { ImageRepository } from "../infra/typeorm/repositories/image-repository";
import { Image } from "../infra/typeorm/entities/Image";
import { PostRepository } from "@modules/posts/infra/typeorm/repositories/PostRepository";

@injectable()
export class CreateImageService {
  constructor(
    @inject("ImageRepository")
    private _imageRepository: ImageRepository,
    @inject("PostRepository")
    private _postRepository: PostRepository
  ) {}

  async execute(files: Express.Multer.File[]): Promise<Image[]> {
    //Validar o post em que as imagens estão relacionadas
    const postId = await this._postRepository;

    // validações
    if (!files) {
      throw new ForBidden("Nenhuma arquivo de imagem foi passado!");
    }

    const imageDTOs: createImageDTO[] = files.map((file) => ({
      path: file.path,
      order: undefined, // Adapte conforme necessário
    }));

    // Cria as imagens usando o repositório
    return await this._imageRepository.create(imageDTOs);
  }
}
