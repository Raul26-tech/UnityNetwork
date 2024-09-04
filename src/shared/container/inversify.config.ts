import { RefreshTokenRepository } from "@modules/authentication/infra/typeorm/repositories/RefresTokenRepository";
import { ImageRepository } from "@modules/images/infra/typeorm/repositories/image-repository";
import { PostRepository } from "@modules/posts/infra/typeorm/repositories/PostRepository";
import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { Container } from "inversify";

const container = new Container();

container
  .bind<UserRepository>("UserRepository")
  .to(UserRepository)
  .inSingletonScope();

container
  .bind<RefreshTokenRepository>("RefreshTokenRepository")
  .to(RefreshTokenRepository)
  .inSingletonScope();

container
  .bind<PostRepository>("PostRepository")
  .to(PostRepository)
  .inSingletonScope();

container
  .bind<ImageRepository>("ImageRepository")
  .to(ImageRepository)
  .inSingletonScope();

export { container };
