

import { donations } from '../../models/donations/init.js';
import { requirements } from '../../models/requirements/init.js';
import { allocations } from '../../models/allocations/init.js';
import { Op } from 'sequelize';

export const allocateDonations = async () => {
    try {
        const allRequirements = await requirements.findAll({
            order: [['emergency', 'DESC']],
        });

        for (const requirement of allRequirements) {
            const matchingDonations = await donations.findAll({
                where: {
                    category_id: requirement.category_id,
                    quantity: {
                        [Op.gte]: requirement.quantity 
                    }
                },
                order: [['quantity', 'DESC']]  
            });

 
            let remainingQuantity = requirement.quantity;

            for (const donation of matchingDonations) {
                if (remainingQuantity <= 0) break;

                const quantityAllocated = Math.min(donation.quantity, remainingQuantity);

 
                await allocations.create({
                    donation_id: donation.id,
                    requirement_id: requirement.id,
                    quantity_allocated: quantityAllocated
                });

                remainingQuantity -= quantityAllocated;

                donation.quantity -= quantityAllocated;
                await donation.save();
            }
        }
        console.log("Donations allocated successfully");
    } catch (error) {
        console.error("Failed to allocate donations: ", error.message);
        throw new Error(error.message);
    }
};
