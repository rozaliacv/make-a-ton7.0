import {categories} from "../../models/categories/init.js"


export const getAllCategories = async (req, res) => {
    try {
        const categoriesList = await categories.findAll(); 
        res.json(categoriesList);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving categories" });
    }
};


export const getCategory = async (req, res) => {
    try {
        const { id,name} = req.params;
        const donation = id
            ? await categories.findOne({where:{id}}) 
            : await categories.findOne({ where: { name } }); 
        
        if (!donation) {
            return res.status(404).json({ error: "Category not found" });
        }

        res.json(donation);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving donation" });
    }
};

