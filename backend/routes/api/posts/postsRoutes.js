

import express from 'express';
import { getAllPosts, getPost,addPost ,deletePost} from '../../../controllers/posts/postsController.js'

const postsRouter = express.Router();

postsRouter
    .route('/')
    .get(getAllPosts)
    .post(addPost)
postsRouter
    .route('/id/:id')
    .get(getPost)
postsRouter
    .route('/:id')
    .delete(deletePost)
postsRouter
    .route('/date_posted/:date_posted')
    .get(getPost)




export default postsRouter;
