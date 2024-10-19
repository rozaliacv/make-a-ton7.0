import {donors} from "../../models/donors/init.js"


export const getAllDonors = async (req, res) => {
    try {
        const donorsList = await donors.findAll(); 
        res.json(donorsList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donors" });
    }
};


export const getDonor = async (req, res) => {
    try {
        const { email,password} = req.params;
        const donor = email
            ? await donors.findOne({where:{email}}) 
            : await donors.findOne({ where: { password } }); 
        
        if (!donor) {
            return res.status(404).json({ error: "Donor not found" });
        }

        res.json(donor);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donor" });
    }
};

export const addDonor = async (req, res) => {
    try {
        const donor = await donors.create(req.body); 
        res.status(201).json(donor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


