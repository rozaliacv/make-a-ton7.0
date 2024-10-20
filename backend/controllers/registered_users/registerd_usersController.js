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
        const { email, password } = req.params;

        if (!email || !password) {
            return res.status(400).json({ error: "Both email and password are required" });
        }

      
        const user = await registered_users.findOne({
            where: {
                email: email,
                password: password
            },
            attributes: ['id'] 
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        
        const userPost = await posts.findOne({
            where: {
                posted_by: user.id
            },
            attributes: ['id'] 
        });

        if (!userPost) {
            return res.status(404).json({ error: "Post not found for this user" });
        }

        
        const postRequirement = await requirements.findOne({
            where: {
                post_id: userPost.id
            },
            attributes: ['id'] 
        });

        if (!postRequirement) {
            return res.status(404).json({ error: "Requirement not found for this post" });
        }

        
        const allocationDetails = await allocations.findAll({
            where: {
                requirement_id: postRequirement.id
            }
        });

        if (!allocationDetails || allocationDetails.rows.length === 0) {
            return res.status(404).json({ error: "No allocations found for this requirement" });
        }

        
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


