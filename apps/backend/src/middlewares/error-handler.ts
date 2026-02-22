import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/app-error.js";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    const isAppError = err instanceof AppError;

    const statusCode = isAppError ? err.statusCode : 500;
    const message =
        isAppError || process.env.NODE_ENV === "development"
            ? err.message
            : "Internal server error";

    res.status(statusCode).json({
        message,
    });
};