import express, { Application } from "express";
import routes from "./routes/router";
import 'dotenv/config';
import InitialSetup from "./models/initialSetup";
import sendSetupMail from "./utils/security/setupMail";

const adminMail = process.env.ADMIN_MAIL;
const app: Application = express();

app.use(express.json());

async function checkInitialSetup() {
    try {
        const setupComplete = await InitialSetup.isSetupComplete();

        if (!setupComplete) {
            const token = await InitialSetup.generateToken();

            await InitialSetup.startSetupConfig(token);

            if (adminMail) {
                await sendSetupMail(adminMail, token);
            }
        }
    } catch (error) {
        console.error(`Failed to send confirmation email`, error);
    }

}

checkInitialSetup().catch(console.error);

app.use(routes);

export default app;