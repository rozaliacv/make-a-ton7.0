

import express from 'express';
import { getAllDonors, getDonor,addDonor } from '../../../controllers/donors/donorsController.js'

const donorsRouter = express.Router();

donorsRouter
    .route('/')
    .get(getAllDonors)
    .post(addDonor)
donorsRouter
    .route('/:email/:password')
    .get(getDonor)




export default donorsRouter;
