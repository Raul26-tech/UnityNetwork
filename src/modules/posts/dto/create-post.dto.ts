import { createImageDTO } from "@modules/images/dto/create-image.dto";

interface createPostDTO {
  title: string;
  content: string;
  images?: createImageDTO[];
}

export { createPostDTO };
