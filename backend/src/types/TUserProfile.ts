import { v4 as uuidv4 } from 'uuid';

type TUserPorfile = {
    id: ReturnType<typeof uuidv4>;
    user_id: ReturnType<typeof uuidv4>;
    bio?: string;
    profile_image?: string;
    first_name: string;
    last_name?: string;
    date_of_birth?: Date;
    phone_number?: string;
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    gender?: string;
    social_links?: JSON;
    preferences?: JSON;
    occupation?: string;
    created_at: Date;
    updated_at: Date;
}

export default TUserPorfile;