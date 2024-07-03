import { Router } from "express";
import multer from "multer";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { isAuthenticated } from "../../../../../shared/infra/http/middlewares/IsAuthenticated";
import upload from "@utils/files";
import { UploadPictureController } from "../controllers/UploadPictureController";
import { UpdateUserController } from "../controllers/UpodateUserController";

const userRoutes = Router();
const uploadFile = multer(upload.upload("./tmp"));

// Controllers
const createUserController = new CreateUserController();
const listUserController = new ListUsersController();
const uploadPictureController = new UploadPictureController();
const updateUserController = new UpdateUserController();

/**
 * @swagger
 * /first-access:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 */
userRoutes.post("/first-access", createUserController.handle);

// /**
//  * @swagger
//  * /users:
//  *   get:
//  *     tags:
//  *       - Users
//  *     summary: List all users
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       200:
//  *         description: List of users
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: array
//  *               items:
//  *                 type: object
//  *                 properties:
//  *                   id:
//  *                     type: string
//  *                   username:
//  *                     type: string
//  */
userRoutes.get("/", isAuthenticated, listUserController.handle);

// Rota para upload da imagem em que o usuário irá usar para o avatar
userRoutes.post(
  "/picture",
  uploadFile.single("avatar"),
  isAuthenticated,
  uploadPictureController.handle
);

// Atualizando o usuário
userRoutes.patch("/:id", isAuthenticated, updateUserController.handle);

export { userRoutes };
