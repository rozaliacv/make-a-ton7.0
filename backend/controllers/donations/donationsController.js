import {donations} from "../../models/donations/init.js"


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
    try {
        const donation = await donations.create(req.body); 
        res.status(201).json(donation);
    } catch (error) {
        res.status(500).json({ message: error.message });
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