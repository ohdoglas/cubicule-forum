import { NextFunction, Request, Response } from "express";
import SERVER from "../../utils/messages/serverMessages";
import USER from "../../utils/messages/userMessages";
import User from "../../models/user";
import isValidUsername from "../../utils/validation/validateUsername";
import validateEmail from "../../utils/validation/validateEmail";
import validatePassword from "../../utils/validation/validatePassword";


export default class registerMiddleware {
    async auth (req: Request, res: Response, next: NextFunction) {
        const { username, email, password} = req.body;

        try {
            if (!username || !email || !password) {
                return res.status(400).json({
                    message: USER.ERR.MISSING_FIELDS
                });
            }

            const isUniqueUsername = await User.findByUsername(username);
            const checkValidUsername = await isValidUsername(username);

            if (!checkValidUsername) {
                return res.status(400).json({
                    message: USER.ERR.INVALID_USERNAME
                })
            }

            if (isUniqueUsername) {
                return res.status(400).json({
                    message: USER.ERR.NOT_UNIQUE_USERNAME
                });
            }

            const isUniqueEmail = await User.findByEmail(email);
            const isValidEmail = await validateEmail(email);

            if (!isValidEmail) {
                return res.status(400).json({
                    message: USER.ERR.INVALID_EMAIL
                })
            }

            if (isUniqueEmail) {
                return res.status(400).json({
                    message: USER.ERR.NOT_UNIQUE_EMAIL
                });
            }

            const weakPassword = await validatePassword(password);
            if (!weakPassword) {
                return res.status(400).json({
                    message: USER.ERR.WEAK_PASSWORD
                });
            }

            next();
        } catch (error) {
            const erro = error as Error;
            console.log(erro)
            return res.status(500).json({ message: SERVER.ERR.INTERNAL_ERROR });
        }
    }
}