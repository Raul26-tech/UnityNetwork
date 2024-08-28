import { Router } from "express";
import { CreatePostController } from "../controllers/CreatePostController";
import { isAuthenticated } from "@shared/infra/http/middlewares/IsAuthenticated";

const postRoutes = Router();

const createPostController = new CreatePostController();

// Criando posts
postRoutes.post("/create", isAuthenticated, createPostController.handle);

export { postRoutes };
