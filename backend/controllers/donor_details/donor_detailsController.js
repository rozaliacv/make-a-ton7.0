import {donor_details} from "../../models/donor_details/init.js"


export const getAllDonordetails = async (req, res) => {
    try {
        const donor_detailsList = await donor_details.findAll(); 
        res.json(donor_detailsList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donor_details" });
    }
};


export const getDonordetail = async (req, res) => {
    try {
        const { id,donated_by} = req.params;
        const donordetail = id
            ? await donor_details.findOne({where:{id}}) 
            : await donor_details.findOne({ where: { donated_by } }); 
        
        if (!donordetail) {
            return res.status(404).json({ error: "Donordetail not found" });
        }

        res.json(donordetail);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donordetail" });
    }
};

export const addDonordetail = async (req, res) => {
    try {
        const donordetail = await donor_details.create(req.body); 
        res.status(201).json(donordetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteDonordetail = async (req, res) => {
    try {
        const deleted = await donor_details.destroy({ where: { id: req.params.id } }); 
        if (!deleted) {
            return res.status(404).json({ error: "Donordetail not found" });
        }

        res.status(204).end(); t
    } catch (error) {
        res.status(500).json({ error: "Error deleting donordetail" });
    }
};