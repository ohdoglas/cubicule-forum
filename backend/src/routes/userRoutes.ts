import { Router } from "express";
import confirmEmailMiddleware from "../middlewares/userMiddlewares/authenticateConfirmEmail";
import confirmEmailController from "../controllers/userControllers/confirmEmail";
import registerMiddleware from "../middlewares/userMiddlewares/authenticateUserRegistration";
import userRegistration from "../controllers/userControllers/register";

export const userRoute = Router();

const authConfirmEmail = new confirmEmailMiddleware().auth;
const confirmEmail = new confirmEmailController().confirmEmail;
const authRegister = new registerMiddleware().auth;
const registerUser = new userRegistration().controller;

userRoute.get('/confirm/:token', authConfirmEmail, confirmEmail);
userRoute.post('/register', authRegister, registerUser);