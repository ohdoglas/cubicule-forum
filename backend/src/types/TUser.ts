import { v4 as uuidv4 } from 'uuid';
import { Roles, Status } from '../utils/enums/accessEnums';

type TUser = {
    id: ReturnType<typeof uuidv4>;
    username: string;
    email: string;
    password_hash: string;
    emailVerified: boolean;
    confirmationToken?: string;
    created_at: Date;
    updated_at: Date;
    last_login?: Date;
    status: Status;
    role: Roles;
}

export default TUser;