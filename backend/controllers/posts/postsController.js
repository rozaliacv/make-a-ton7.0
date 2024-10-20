import {posts} from "../../models/posts/init.js"
import { requirements } from "../../models/requirements/init.js";
import { categories } from "../../models/categories/init.js"; 

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
    const t = await posts.sequelize.transaction(); // Use transaction to ensure atomicity
    try {
        // Step 1: Create the post
        console.log("Request Body:", req.body); // Log the request body
        const post = await posts.create(req.body, { transaction: t });

        // Step 2: Get category ID using category name
        const { category_name, quantity, emergency } = req.body; // Get the category name from the request body
        if (!category_name || !quantity || !emergency) {
            throw new Error("Missing required fields for creating a requirement");
        }

        console.log("Post Created:", post); // Log the created post

        // Find the category ID
        const category = await categories.findOne({
            where: { name: category_name }, // Assuming 'name' is the field that contains the category name
            attributes: ['id'] // Only fetch the id
        });

        if (!category) {
            throw new Error("Category not found");
        }

        // Now we can create the requirement
        const requirementData = {
            post_id: post.id, // The post_id from the newly created post
            category_id: category.id, // Use the found category ID
            quantity: quantity,       // Assuming quantity is sent in the request body
            emergency: emergency,     // Assuming emergency level is sent in the request body
        };

        console.log("Requirement Data:", requirementData); // Log the requirement data

        const requirement = await requirements.create(requirementData, { transaction: t });

        console.log("Requirement Created:", requirement); // Log the created requirement

        // Commit the transaction
        await t.commit();

        // Return the newly created post and requirement
        res.status(201).json({ post, requirement });
    } catch (error) {
        console.error("Transaction Error:", error); // Log the error
        // If any error occurs, rollback the transaction
        await t.rollback();
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