import { NextFunction, Request, Response } from "express";
import SERVER from "../utils/messages/serverMessages";
import jwt from 'jsonwebtoken';
import User from "../models/user";
import TRequestUserID from "../types/TRequest";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function authToken(req: TRequestUserID, res: Response, next: NextFunction) {
    const authReq = req.headers.authorization;
    const token = authReq && authReq.split(' ')[1];

    try {
        if (!token) {
            return res.status(401).json({
                message: SERVER.ERR.MISSING_TOKEN
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { sub: string };
        const userExists = await User.findById(decoded.sub);

        if (!userExists) {
            return res.status(404).json({
                message: SERVER.ERR.USER_NOT_FOUND
            });
        }

        req.userId = decoded.sub;

        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ message: SERVER.ERR.EXPIRED_TOKEN });
        }
        const erro = error as Error;
        return res.status(500).json({ message: SERVER.ERR.INTERNAL_ERROR });
    }
}