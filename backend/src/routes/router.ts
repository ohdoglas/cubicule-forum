import { Router, Request, Response } from "express";
import setupRoutes from "./serverSide/setupRoute";
import { userRoute } from "./userRoutes";
import { authToken } from "../middlewares/authenticateToken";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server OK"
    });
});

routes.use('/', setupRoutes);
routes.use('/', userRoute);
routes.use(authToken);

routes.get('/token-test', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Token Test OK"
    });
});

export default routes;