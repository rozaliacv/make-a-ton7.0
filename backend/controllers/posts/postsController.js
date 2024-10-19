import {posts} from "../../models/posts/init.js"


export const getAllPosts = async (req, res) => {
    try {
        const postsList = await posts.findAll(); 
        res.json(postsList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving posts" });
    }
};


export const getPost = async (req, res) => {
    try {
        const { id,date_posted} = req.params;
        const post = id
            ? await posts.findOne({where:{id}}) 
            : await posts.findOne({ where: { date_posted } }); 
        
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving post" });
    }
};

export const addPost = async (req, res) => {
    try {
        const post = await posts.create(req.body); 
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const deleted = await posts.destroy({ where: { id: req.params.id } }); 
        if (!deleted) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.status(204).end(); t
    } catch (error) {
        res.status(500).json({ error: "Error deleting post" });
    }
};