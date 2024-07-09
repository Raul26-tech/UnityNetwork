import { NextFunction, Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { ZodError } from "zod";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "jsonwebtoken";

export async function catchErrors(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Promise<Response> {
  if (error instanceof ZodError) {
    return response.status(400).json({
      message: error.errors[0].message,
    });
  }

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (
    error instanceof JsonWebTokenError ||
    error instanceof TokenExpiredError ||
    error instanceof NotBeforeError
  ) {
    return response.status(401).json({
      message: `Falha na validação do token: ${error.message}`,
    });
  }

  return response.status(500).json({
    message: `Internal server error - ${error.message}`,
  });
}
