

import express from 'express';
import { getAllDonations, getDonation,addDonation ,deleteDonation} from '../../../controllers/donations/donationsController.js'

const donationsRouter = express.Router();

donationsRouter
    .route('/')
    .get(getAllDonations)
    .post(addDonation)
donationsRouter
    .route('/:id')
    .get(getDonation)
    .delete(deleteDonation)
donationsRouter
    .route('/:donation_id')
    .get(getDonation)




export default donationsRouter;
