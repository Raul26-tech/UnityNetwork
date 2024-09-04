import environment from "@config/environment";
import { CreateImageService } from "@modules/images/services/create-image-service";
import { container } from "@shared/container/inversify.config";
import { Request, Response } from "express";

export class CreateImageController {
  async handle(request: Request, response: Response) {
    const createImages = container.resolve(CreateImageService);

    // Se request.files for um array de arquivos:
    const files = request.files as Express.Multer.File[];

    const images = await createImages.execute(files);

    // Responde com as informações das imagens criadas
    return response.status(200).json({
      paths: images.map((image) => `${environment.STORAGE_PATH}/${image.url}`),
    });
  }
}
