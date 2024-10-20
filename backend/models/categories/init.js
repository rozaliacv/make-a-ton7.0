import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 
export const categories = sequelize.define('categories', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    }
}, {
    tableName: 'categories',
    timestamps: false  
});


const createCategoriesTable = async () => {
    try {
        await categories.sync({ alter: true });
        console.log("categories table created or updated successfully");
    } catch (error) {
        console.error("Failed to create categories table: ", error.message);
        throw new Error(error.message);
    }
};

export default createCategoriesTable;
