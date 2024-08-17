import { Router } from "express";
import { userRoutes } from "../../../../modules/users/infra/http/routes/user.routes";
import { authenticateUserRouter } from "../../../../modules/authentication/infra/http/routes/auth.routes";
import { postRoutes } from "@modules/posts/infra/http/routes/post.routes";

const router = Router();

/**
 * @swagger
 * /login:
 *  get:
 *     produces:
 *       - application/json
 */
router.use("/", authenticateUserRouter);

/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Users
 *     summary: List all users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   username:
 *                     type: string
 */
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export { router };
