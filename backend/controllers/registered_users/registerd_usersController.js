import {registered_users} from "../../models/registered_users/init.js"
import {posts} from "../../models/posts/init.js"
import { requirements } from "../../models/requirements/init.js";
import { allocations } from "../../models/allocations/init.js";

export const getAllUsers = async (req, res) => {
    try {
        const usersList = await registered_users.findAll(); 
        res.json(usersList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving users" });
    }
};



export const getUser = async (req, res) => {
    try {
        const { email, password } = req.body; // Adjust to how you're sending the data

        if (!email || !password) {
            return res.status(400).json({ error: "Both email and password are required" });
        }

        // Find the user
        const user = await registered_users.findOne({
            where: { email, password },
            attributes: ['id'] 
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Find the user's post
        const userPost = await posts.findOne({
            where: { posted_by: user.id },
            attributes: ['id'] 
        });

        if (!userPost) {
            return res.status(404).json({ error: "Post not found for this user" });
        }

        // Find the post's requirement
        const postRequirement = await requirements.findOne({
            where: { post_id: userPost.id },
            attributes: ['id'] 
        });

        if (!postRequirement) {
            return res.status(404).json({ error: "Requirement not found for this post" });
        }

        // Find all allocation details for the requirement
        const allocationDetails = await allocations.findAll({
            where: { requirement_id: postRequirement.id }
        });

        if (!allocationDetails || allocationDetails.length === 0) {
            return res.status(404).json({ error: "No allocations found for this requirement" });
        }

        // Respond with allocation details
        res.json(allocationDetails);

    } catch (error) {
        console.error("Error retrieving allocation data: ", error);
        res.status(500).json({ error: "Error retrieving allocation data" });
    }
};



export const addUser = async (req, res) => {
    try {
        const user = await registered_users.create(req.body); 
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


