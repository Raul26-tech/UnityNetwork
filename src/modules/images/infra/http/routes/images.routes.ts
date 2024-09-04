import { isAuthenticated } from "@shared/infra/http/middlewares/IsAuthenticated";
import upload from "@utils/files";
import { Router } from "express";
import multer from "multer";
import { CreateImageController } from "../controllers/create-image-controller";

export const imageRoutes = Router();
const uploadFiles = multer(upload.upload("./tmp"));

const createImageController = new CreateImageController();

imageRoutes.post(
  "/images",
  uploadFiles.array("files", 10),
  isAuthenticated,
  createImageController.handle
);
