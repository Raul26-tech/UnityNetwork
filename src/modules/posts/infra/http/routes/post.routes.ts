import { Router } from "express";
import { CreatePostController } from "../controllers/CreatePostController";
import { isAuthenticated } from "@shared/infra/http/middlewares/IsAuthenticated";
import { ReadPostController } from "../controllers/read-post-controller";
import { ListPostController } from "../controllers/list-post-controller";

const postRoutes = Router();

const createPostController = new CreatePostController();
const readPostController = new ReadPostController();
const listPostController = new ListPostController();

// Criando posts
postRoutes.post("/create", isAuthenticated, createPostController.handle);

// Listando todos os posts
postRoutes.get("/", isAuthenticated, listPostController.handle);

// Listando um único post
postRoutes.get(":id", isAuthenticated, readPostController.handle);

export { postRoutes };
