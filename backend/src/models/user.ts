import TUser from "../types/TUser";
import { v4 as uuidv4 } from 'uuid';
import isValidUsername from "../utils/validation/validateUsername";
import validateEmail from "../utils/validation/validateEmail";
import validatePassword from "../utils/validation/validatePassword";
import { generateConfirmationToken } from "../utils/security/emailConfirmationToken";
import hash from "../utils/security/pass/passwordHash";
import prisma from "../config/prisma";
import USER from "../utils/messages/userMessages";



export default class User {
    readonly id: ReturnType<typeof uuidv4>;
    username: string;
    email: string;
    private password_hash: string;
    profile_image?: string;
    bio?: string;
    emailVerified: boolean;
    confirmationToken?: string;
    created_at: Date;
    updated_at: Date;
    last_login?: Date;
    status: string;
    role: string;

    constructor(props: TUser) {
        this.id = props.id || uuidv4();
        this.username = props.username;
        this.email = props.email;
        this.password_hash = props.password_hash;
        this.profile_image = props.profile_image;
        this.bio = props.bio;
        this.emailVerified = props.emailVerified;
        this.confirmationToken = props.confirmationToken;
        this.created_at = props.created_at || new Date();
        this.updated_at = props.updated_at || new Date();
        this.last_login = props.last_login;
        this.status = props.status;
        this.role = props.role;
    }

    async create (user: TUser) {
        if (!isValidUsername(user.username)) return USER.ERR.INVALID_USERNAME;
        if (await this.findByUsername(user.username)) return USER.ERR.NOT_UNIQUE_USERNAME;
        if (!validateEmail(user.email)) return USER.ERR.INVALID_EMAIL;
        if (await this.findByEmail(user.email)) return USER.ERR.NOT_UNIQUE_EMAIL;
        if (!validatePassword(user.password_hash)) return USER.ERR.WEAK_PASSWORD;

        const hashed = await hash(user.password_hash);
        const emailConfirmToken = await generateConfirmationToken();

        const newUser = await prisma.user.create({
            data: {
                id: uuidv4(),
                username: user.username,
                email: user.email,
                password_hash: hashed,
                emailVerified: false,
                confirmationToken: emailConfirmToken,
                created_at: String(Date.now()),
                updated_at: String(Date.now()),
                status: "Active",
                role: "user",
            }
        });

        return newUser;

    }

    async update () {

    }

    async delete () {

    }

    async findById (id: string) {
        const find = await prisma.user.findUnique({
            where: { id: id}
        });

        if (!find) {
            return null;
        }

        return find;
    }

    async findByUsername (username: string) {
        const find = await prisma.user.findUnique({
            where: { username: username }
        });

        if (!find) {
            return null;
        }

        return find;
    }

    async findByEmail (email: string) {
        const find = await prisma.user.findUnique({
            where: { email: email}
        });

        if (!find) {
            return null;
        }

        return find
    }

    async list () {

    }

    async verifyEmail (token: string) {
        await prisma.user.update({
            where: {confirmationToken: token},
            data: {
                emailVerified: true
            }
        });
    }

    async resetPassword () {

    }

    async changePassword () {

    }

    async getProfile () {

    }

    async setRole () {

    }

    async updateLastLogin () {

    }

    async listActive () {

    }
}