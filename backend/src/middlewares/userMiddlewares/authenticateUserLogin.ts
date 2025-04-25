import { NextFunction, Request, Response } from "express";
import SERVER from "../../utils/messages/serverMessages";
import USER from "../../utils/messages/userMessages";
import prisma from "../../config/prisma";
import User from "../../models/user";
import comparePassword from "../../utils/security/pass/unhashPassword";



export default class LoginMiddleware {
    async auth(req: Request, res: Response, next: NextFunction) {
        const { username, email, password} = req.body;
        try {
            if (!username && !email) {
                return res.status(400).json({
                    message: USER.ERR.MISSING_USERNAME_EMAIL
                });
            }

            if (!password) {
                return res.status(400).json({
                    message: USER.ERR.MISSING_PASSWORD
                });
            }

            const userExists = await prisma.user.findFirst({
                where: {
                    OR:[
                        {email},
                        {username}
                    ]
                }
            })

            if (!userExists) {
                return res.status(401).json({
                    message: USER.ERR.INVALID_LOGIN_CREDENTIALS
                });
            }

            const isEmailVerified = await User.isVerified(userExists.id);

            if (!isEmailVerified) {
                return res.status(400).json({
                    message: USER.ERR.EMAIL_CONFIRMATION_REQUIRED
                });
            }

            const isActive = await User.isActive(userExists.id);

            if (!isActive) {
                return res.status(400).json({
                    message: USER.ERR.ACCOUNT_NOT_ACTIVE
                });
            }

            const validateHash = await comparePassword(password, userExists.password_hash);

            if (!validateHash) {
                return res.status(401).json({
                    message: USER.ERR.INVALID_LOGIN_CREDENTIALS
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