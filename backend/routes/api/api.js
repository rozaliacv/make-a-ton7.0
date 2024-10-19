import express from "express";
import allocationsRouter from './allocations/allocationsRoutes.js';
import donationsRouter from "./donations/donationsRoutes.js";
import donorsRouter from "./donors/donorsRoutes.js";
import donordetailsRouter from "./donors/donorsRoutes.js"
import requirementsRouter from "./requirements/requirementsRoutes.js";
import postsRouter from "./posts/postsRoutes.js";
import usersRouter from "./registered_users/registered_usersRoutes.js";
import categoriesRouter from "./categories/categoriesRoutes.js"


export const apiRouter = express.Router();

apiRouter.use("/allocations",allocationsRouter);
apiRouter.use("/donations",donationsRouter);
apiRouter.use("/donors",donorsRouter);
apiRouter.use("/donordetails",donordetailsRouter);
apiRouter.use("/requirements",requirementsRouter);
apiRouter.use("/posts",postsRouter);
apiRouter.use("/registered_users",usersRouter);
apiRouter.use("/categories",categoriesRouter);
