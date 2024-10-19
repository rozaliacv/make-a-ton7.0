

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
