import { AppError } from "./AppError";

class ForBidden extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}

export { ForBidden };
