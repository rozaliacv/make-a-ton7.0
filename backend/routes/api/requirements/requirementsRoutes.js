

import express from 'express';
import { getAllRequirements, getRequirement,addRequirement ,deleteRequirement} from '../../../controllers/requirements/requirementsController.js'

const requirementsRouter = express.Router();

requirementsRouter
    .route('/')
    .get(getAllRequirements)
    .post(addRequirement)
requirementsRouter
    .route('/:id')
    .get(getRequirement)
    .delete(deleteRequirement)
requirementsRouter
    .route('/:post_id')
    .get(getRequirement)




export default requirementsRouter;
