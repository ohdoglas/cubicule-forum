import prisma from "../config/prisma";
import { Roles, Status } from "../utils/enums/accessEnums";
import {v4 as uuidv4 } from 'uuid'

const roles = [
    {
        role_name: Roles.ADMIN, description: 'Administrator', status: true
    },
    {
    role_name: Roles.MODERATOR, description: 'Moderator', status: true
    },
    {
    role_name: Roles.USER, description: 'Regular User', status: true
    },
    {
    role_name: Roles.GUEST, description: 'Guest User', status: true
    }
]

export default class Role {
    static async seed () {
        const createdRoles = [];

        for (const role of roles) {
            const roleExists = await prisma.roles.findUnique({
                where: { role_name: role.role_name }
            });

            if (!roleExists) {
                await prisma.roles.create({ data: role })
                createdRoles.push(role.role_name);
            }
        }
        return createdRoles;
    }

    static async assignUserRole(role: string, userId: string) {

        const roleId = await prisma.roles.findUnique({
            where: { role_name: role},
            select: {id: true}
        })

        if (!roleId) {
            return false;
        }

        const assignedRole = await prisma.userRoles.create({
            data: {
                id: uuidv4(),
                user_id: userId,
                role_id: roleId!.id,
                assigned_at: new Date(),
            }
        })
        return assignedRole;
    }
}