import environment from "@config/environment";
import { Request, Response } from "express";

class UploadPictureController {
  async handle(request: Request, response: Response) {
    return response.status(200).json({
      url: `${environment.STORAGE_PATH}/${request.file.filename}`,
    });
  }
}

export { UploadPictureController };
