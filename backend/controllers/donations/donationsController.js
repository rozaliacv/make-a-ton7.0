import {donations} from "../../models/donations/init.js"
import allocations from '../../models/allocations/init.js';  


export const getAllDonations = async (req, res) => {
    try {
        const donationsList = await donations.findAll(); 
        res.json(donationsList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donations" });
    }
};


export const getDonation = async (req, res) => {
    try {
        const { id,donation_id} = req.params;
        const donation = id
            ? await donations.findOne({where:{id}}) 
            : await donations.findOne({ where: { donation_id } }); 
        
        if (!donation) {
            return res.status(404).json({ error: "Donation not found" });
        }

        res.json(donation);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donation" });
    }
};

export const addDonation = async (req, res) => {
    const transaction = await donations.sequelize.transaction(); 
    try {
        const donation = await donations.create(req.body, { transaction });
        
        
        const allocationDetails = {
            donation_id: donation.id, 
            allocation_quantity: donation.quantity, 
        };

        
        await allocations.create(allocationDetails, { transaction });

        await transaction.commit();

        res.status(201).json(donation); 
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ message: 'Error creating donation and allocation', error: error.message });
    }
};

export const deleteDonation = async (req, res) => {
    try {
        const deleted = await donations.destroy({ where: { id: req.params.id } }); 
        if (!deleted) {
            return res.status(404).json({ error: "Donation not found" });
        }

        res.status(204).end(); t
    } catch (error) {
        res.status(500).json({ error: "Error deleting requirement " });
    }
};