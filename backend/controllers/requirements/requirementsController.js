import {requirements} from "../../models/requirements/init.js"


export const getAllRequirements = async (req, res) => {
    try {
        const requirementsList = await requirements.findAll(); 
        res.json(requirementsList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving requirements" });
    }
};


export const getRequirement = async (req, res) => {
    try {
        const { id,post_id} = req.params;
        const requirement = id
            ? await requirements.findOne({where:{id}}) 
            : await requirements.findOne({ where: { post_id } }); 
        
        if (!requirement) {
            return res.status(404).json({ error: "Requirement not found" });
        }

        res.json(requirement);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving requirement" });
    }
};

export const addRequirement = async (req, res) => {
    try {
        const requirement = await requirements.create(req.body); 
        res.status(201).json(requirement);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteRequirement = async (req, res) => {
    try {
        const deleted = await requirements.destroy({ where: { id: req.params.id } }); 
        if (!deleted) {
            return res.status(404).json({ error: "Requirement not found" });
        }

        res.status(204).end(); t
    } catch (error) {
        res.status(500).json({ error: "Error deleting requirement " });
    }
};