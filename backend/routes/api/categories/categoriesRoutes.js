

import express from 'express';
import { getAllCategories, getCategory } from '../../../controllers/categories/categoriesController.js'

const categoriesRouter = express.Router();

categoriesRouter
    .route('/')
    .get(getAllCategories)
categoriesRouter
    .route('id/:id')
    .get(getCategory)
categoriesRouter
    .route('name/:name')
    .get(getCategory)



export default categoriesRouter;
