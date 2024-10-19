import express from "express";
import  allocationsRouter from './allocations/allocationsRoutes.js';

export const apiRouter = express.Router();

apiRouter.use("/allocations",allocationsRouter);
