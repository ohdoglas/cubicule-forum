import { NextFunction, Request, Response } from "express";
import InitialSetup from "../../models/initialSetup";
import SETUP from "../../utils/messages/setupMessages";
import Role from "../../models/roles";
import Permission from "../../models/permissions";
import { Permissions, Roles } from "../../utils/enums/accessEnums";
import SERVER from "../../utils/messages/serverMessages";


export default class initSetup {
    async controller (req: Request, res: Response, next: NextFunction) {
        const { username, email, password, token } = req.body;

        try {
            const superAdmin = await InitialSetup.createAdmin(username, email, password);

            await InitialSetup.markSetupComplete(token);

            await Role.assignUserRole(Roles.ADMIN, superAdmin.id)
            await Permission.assignPermissions(Permissions.READ_ONLY, superAdmin.id);
            await Permission.assignPermissions(Permissions.WRITE, superAdmin.id);
            await Permission.assignPermissions(Permissions.DELETE, superAdmin.id);
            await Permission.assignPermissions(Permissions.MANAGE_USERS, superAdmin.id);
            await Permission.assignPermissions(Permissions.VIEW_DASHBOARD, superAdmin.id);
            await Permission.assignPermissions(Permissions.EDIT_CONTENT, superAdmin.id);

            return res.status(203).json({
                message: SETUP.SUCCESS.ADMIN_CREATED,
                user: {
                    username,
                    email
                }
            });
        } catch (error) {
            const erro = error as Error;
            console.log(erro)
            return res.status(500).json({ message: SERVER.ERR.INTERNAL_ERROR });
        }
    }
}