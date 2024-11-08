import { v4 as uuidv4 } from 'uuid';
import TInitialSetup from '../types/TInitialSetup';
import prisma from '../config/prisma';
import crypto from 'crypto';


export default class InitialSetup {
    id: ReturnType<typeof uuidv4>;
    setupComplete: boolean;
    private setupToken: string;
    created_at: Date;
    completed_at?: Date;

    constructor (props: TInitialSetup) {
        this.id = props.id || uuidv4();
        this.setupComplete = props.setupComplete;
        this.setupToken = props.setupToken
        this.created_at = props.created_at || new Date();
        this.completed_at = props.completed_at;
    }

    static async generateToken () {
        const token = await crypto.randomBytes(32).toString('hex');
        return token;
    }

    static async validateToken(token: string): Promise<boolean> {
        const check = await prisma.initialSetup.findUnique({
            where: { id: token }
        })

        if (!check) {
            return false;
        }

        return true;

    }

    static async markSetupComplete (token: string) {
        const update = await prisma.initialSetup.update({
            where: { setupToken: token  },
            data: { setupComplete: true}
        });
    }

    static async isSetupComplete (token: string) {
        const check = await prisma.initialSetup.findFirst({
            where: { setupToken: token }
        });

        if (!check) {
            return null;
        }

        return check.setupComplete;
    }

    static async getSetupDetails (id: string) {
        const find = await prisma.initialSetup.findUnique({
            where: { id: id },
            select: {
                setupComplete: true,
                setupToken: true,
                created_at: true,
                completed_at: true,
            }
        });

        if (!find) {
            return null;
        }

        return find;
    }

    static async initializeSetup () {

    }
}
