import { NextFunction, Request, Response } from "express";
import InitialSetup from "../../models/initialSetup";
import SETUP from "../../utils/messages/setupMessages";
import sendConfirmationEmail from "../../utils/security/userEmailConfirmation";
import { generateConfirmationToken } from "../../utils/security/token/emailConfirmationToken";


export default class initSetup {
    async controller (req: Request, res: Response, next: NextFunction) {
        const { username, email, password, token } = req.body;

        try {
            const superAdmin = await InitialSetup.createAdmin(username, email, password);

            const emailConfirmationToken = await generateConfirmationToken();
            await InitialSetup.markSetupComplete(token);
            await sendConfirmationEmail(email, emailConfirmationToken);

            return res.status(203).json({
                message: SETUP.SUCCESS.ADMIN_CREATED,
                user: {
                    username,
                    email
                }
            });
        } catch (error) {
            const erro = error as Error;
            return res.status(500).json({ message: erro.message });
        }
    }
}