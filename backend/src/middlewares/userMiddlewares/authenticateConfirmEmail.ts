import { Request, Response, NextFunction } from 'express';
import SERVER from '../../utils/messages/serverMessages';
import USER from '../../utils/messages/userMessages';
import User from '../../models/user';


export default class confirmEmailMiddleware {
    async auth(req: Request, res: Response, next: NextFunction) {
        const { token } = req.params;

        try {
            if (!token) {
                return res.status(400).json({
                    message: USER.ERR.MISSING_EMAIL_CONFIRM_TOKEN
                });
            }

            const userToken = await User.findConfirmationToken(token);

            if (!userToken) {
                return res.status(400).json({
                    message: USER.ERR.INVALID_CONFIRMATION_TOKEN
                });
            }

            if (userToken.emailVerified === true) {
                return res.status(400).json({
                    message: USER.ERR.ALREADY_VERIFIED
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