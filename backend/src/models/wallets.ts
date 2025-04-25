import TWallet from '../types/TWallet'
import { v4 as uuidv4 } from 'uuid'

export default class Wallets {
    id?: ReturnType<typeof uuidv4>;
    user_id?: ReturnType<typeof uuidv4>;
    balance: number;
    created_at: Date;
    updated_at?: Date;


    constructor (props: TWallet) {
        this.id = props.id;
        this.user_id = props.user_id;
        this.balance = props.balance;
        this.created_at = props.created_at;
        this.updated_at = props.updated_at;
    }

    async createWallet () {

    }

    async getWalletById () {

    }

    async updateWallet () {

    }

    async deleteWallet () {

    }

    //! transaction methods

    async addFunds () {

    }

    async deductFunds () {

    }

    async transferFunds () {

    }

    async getTransactionHistory () {

    }

    //! security methods

    async validateFundsAvailability () {

    }

    async lockWallet () {

    }

    async unlockWallet () {

    }

    async checkFraudulentActivity () {

    }

    //! aux methods

    async listAllWallets () {

    }

    async getWalletBalance () {

    }

    async updateTimestamp () {

    }

    async generateWalletReport () {

    }
}