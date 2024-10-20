

import express from 'express';
import { createAllocation, getAllAllocations } from '../../../controllers/allocations/allocationsController.js'

const allocationsRouter = express.Router();

allocationsRouter
    .route('/')
    .post(createAllocation)
    .get(getAllAllocations)




export default allocationsRouter;
