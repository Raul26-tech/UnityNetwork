import multer from "multer";
import { randomUUID } from "crypto";

const fileId = randomUUID();

export default {
  upload(path: string) {
    return {
      storage: multer.diskStorage({
        destination: path,
        filename: (request, file, callback) => {
          const fileName = `${fileId}-${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
