

import { allocateDonations } from '../../middleware/allocation/allocateDonations.js';
import { allocations } from '../../models/allocations/init.js';

export const createAllocation = async (req, res) => {
    try {
        await allocateDonations();

        return res.status(200).json({
            message: "Donations have been successfully allocated based on requirements."
        });
    } catch (error) {
        console.error("Error during allocation: ", error.message);
        return res.status(500).json({
            message: "Failed to allocate donations.",
            error: error.message
        });
    }
};


export const getAllAllocations = async (req, res) => {
    try {
        const allAllocations = await allocations.findAll();
        return res.status(200).json(allAllocations);
    } catch (error) {
        console.error("Error fetching allocations: ", error.message);
        return res.status(500).json({
            message: "Failed to fetch allocations.",
            error: error.message
        });
    }
};
export const getAllocations = async (req, res) => {
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