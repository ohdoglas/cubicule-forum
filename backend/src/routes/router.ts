import { Router, Request, Response } from "express";
import setupRoutes from "./serverSide/setupRoute";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Server OK"
    });
});

routes.use('/', setupRoutes);

export default routes;