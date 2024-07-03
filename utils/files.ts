import multer from "multer";
import { resolve } from "path";
import { randomUUID } from "crypto";

const fileId = randomUUID();

export default {
  upload(path: string) {
    console.log(resolve(__dirname, "..", "..", "..", `${path}`));

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
