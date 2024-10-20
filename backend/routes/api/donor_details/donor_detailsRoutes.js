

import express from 'express';
import { getAllDonordetails, getDonordetail,addDonordetail ,deleteDonordetail} from '../../../controllers/donor_details/donor_detailsController.js'

const donordetailsRouter = express.Router();

donordetailsRouter
    .route('/')
    .get(getAllDonordetails)
    .post(addDonordetail)
donordetailsRouter
    .route('/:id')
    .get(getDonordetail)
    .delete(deleteDonordetail)
donordetailsRouter
    .route('/:donated_by')
    .get(getDonordetail)




export default donordetailsRouter;
