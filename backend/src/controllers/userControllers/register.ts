import { Request, Response } from "express";
import SERVER from "../../utils/messages/serverMessages";
import hash from "../../utils/security/pass/passwordHash";
import User from "../../models/user";
import { generateConfirmationToken } from "../../utils/security/token/emailConfirmationToken";
import USER from "../../utils/messages/userMessages";



export default class userRegistration {
    async controller (req: Request, res: Response) {
        const { username, email, password } = req.body;

        try {
            await User.create({
                username,
                email,
                password_hash: password
            })

            return res.status(201).json({
                message: USER.SUCCESS.CONFIRM_EMAIL_SENT
            });
        } catch (error) {
            const erro = error as Error;
            console.log(erro)
            return res.status(500).json({ message: SERVER.ERR.INTERNAL_ERROR });
        }
    }
}