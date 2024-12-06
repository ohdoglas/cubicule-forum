import { Router, Request, Response } from "express";
import setupRoutes from "./serverSide/setupRoute";
import { userRoute } from "./userRoutes";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server OK"
    });
});

routes.use('/', setupRoutes);
routes.use('/', userRoute);

export default routes;