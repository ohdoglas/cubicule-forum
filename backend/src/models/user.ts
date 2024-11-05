import TUser from "../types/TUser";
import { v4 as uuidv4 } from 'uuid';



export default class User {
    readonly id?: ReturnType<typeof uuidv4>;
    username: string;
    email: string;
    password_hash: string;
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
        this.id = props.id;
        this.username = props.username;
        this.email = props.email;
        this.password_hash = props.password_hash;
        this.profile_image = props.profile_image;
        this.bio = props.bio;
        this.emailVerified = props.emailVerified;
        this.confirmationToken = props.confirmationToken;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
        this.last_login = props.last_login;
        this.status = props.status;
        this.role = props.role;
    }

    async create (user: TUser) {

    }

    async update () {

    }

    async delete () {

    }

    async findById () {

    }

    async findByEmail () {

    }

    async list () {

    }

    async verifyEmail () {

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