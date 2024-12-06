import { Router } from "express";
import confirmEmailMiddleware from "../middlewares/userMiddlewares/authenticateConfirmEmail";
import confirmEmailController from "../controllers/userControllers/confirmEmail";

export const userRoute = Router();

const authConfirmEmail = new confirmEmailMiddleware().auth;
const confirmEmail = new confirmEmailController().confirmEmail;

userRoute.get('/confirm/:token', authConfirmEmail, confirmEmail);