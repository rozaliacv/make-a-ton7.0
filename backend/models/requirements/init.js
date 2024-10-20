import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 


export const requirements = sequelize.define('requirements', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model:'categories',
            key:'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model:'posts',
            key:'id'
        }
    },
    emergency: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    tableName: 'requirements',
    timestamps: false 
});


const createRequirementsTable = async () => {
    try {
        await requirements.sync({ alter: true }); 
        console.log("requirements table created or updated successfully");
    } catch (error) {
        console.error("Failed to create requirements table: ", error.message);
        throw new Error(error.message);
    }
};

export default createRequirementsTable;
