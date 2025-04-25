import { Router } from "express";
import initSetupMiddleware from "../../middlewares/setupMiddlewares/initSetupMiddleware";
import initSetup from "../../controllers/setupControllers/initSetup";

const setupRoutes = Router();

const adminAuthentication = new initSetupMiddleware().authentication;
const setupAdmin = new initSetup().controller;

setupRoutes.post('/setup/admin', adminAuthentication, setupAdmin);

export default setupRoutes;