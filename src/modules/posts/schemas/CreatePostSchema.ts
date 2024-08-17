import { z } from "zod";

const CreatePostSchema = z
  .object({
    title: z.string({
      required_error: "Titulo é obrigatorio",
      invalid_type_error: "O título do post precisa ser um texto",
    }),
    content: z.string({
      required_error: "Conteúdo é obrigatorio",
      invalid_type_error: "O post precisa ter o conteúdo preenchido",
    }),
  })
  .required({
    title: true,
    content: true,
  });

export { CreatePostSchema };
