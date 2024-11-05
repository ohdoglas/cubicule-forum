import { v4 as uuidv4 } from 'uuid';

type TUser = {
    id?: ReturnType<typeof uuidv4>;
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
}

export default TUser;