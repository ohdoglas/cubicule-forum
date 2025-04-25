import prisma from "../config/prisma"
import { Permissions } from "../utils/enums/accessEnums";
import { v4 as uuidv4 } from 'uuid';

const permissions = [
    {
        permission: Permissions.READ_ONLY, description: 'Read-Only Access'
    },
    {
        permission: Permissions.WRITE, description: 'Write Access'
    },
    {
        permission: Permissions.DELETE, description: 'Delete Access'
    },
    {
        permission: Permissions.MANAGE_USERS, description: 'Manage User Accounts'
    },
    {
        permission: Permissions.VIEW_DASHBOARD, description: 'View Dashboard'
    },
    {
        permission: Permissions.EDIT_CONTENT, description: 'Edit Content'
    }
]

export default class Permission {
    static async seed() {
        const createdPermissions = [];

        for (const permission of permissions) {
            const permissionExists = await prisma.permissions.findUnique({
                where: {
                    permission: permission.permission
                }
            });

            if (!permissionExists) {
                await prisma.permissions.create({
                    data: permission
                });
                createdPermissions.push(permission.permission);
            }
        }
        return createdPermissions;
    }

    static async assignPermissions(permissionName: string, userId: string) {
        const permissionId = await prisma.permissions.findUnique({
            where: {permission: permissionName },
            select: { id: true }
        })

        if (!permissionId) {
            return false;
        }

        const assign = await prisma.userPermissions.create({
            data: {
                id: uuidv4(),
                user_id: userId,
                permission_id:  permissionId.id,
                granted_at: new Date()
            }
        });

        return assign;
    }
}