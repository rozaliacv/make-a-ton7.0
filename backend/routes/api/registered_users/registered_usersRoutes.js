

import express from 'express';
import { getAllUsers, getUser,addUser } from '../../../controllers/registered_users/registerd_usersController.js'

const usersRouter = express.Router();

usersRouter
    .route('/')
    .get(getAllUsers)
    .post(addUser)
usersRouter
    .route('/:email/:password')
    .get(getUser)




export default usersRouter;
