import { Request, Response } from "express";
import SERVER from "../../utils/messages/serverMessages";
import User from "../../models/user";
import USER from "../../utils/messages/userMessages";
import Role from "../../models/roles";
import Permission from "../../models/permissions";
import { Permissions, Roles } from "../../utils/enums/accessEnums";



export default class userRegistration {
    async controller (req: Request, res: Response) {
        const { username, email, password } = req.body;

        try {
            const newUser = await User.create({
                username,
                email,
                password_hash: password
            })

            await Role.assignUserRole(Roles.USER, newUser.id);
            await Permission.assignPermissions(Permissions.READ_ONLY, newUser.id);
            await Permission.assignPermissions(Permissions.VIEW_DASHBOARD, newUser.id);

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