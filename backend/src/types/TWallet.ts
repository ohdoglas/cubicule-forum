import { v4 as uuidv4 } from 'uuid';


type TWallet = {
    id?: ReturnType<typeof uuidv4>;
    user_id?: ReturnType<typeof uuidv4>;
    balance: number;
    created_at: Date;
    updated_at?: Date;
}

export default TWallet;