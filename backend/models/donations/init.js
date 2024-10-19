import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 


const donations = sequelize.define('donations', {
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
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    donation_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model:'donor_details',
            key:'id'
        }
    },
    emergency: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
    tableName: 'donations',
    timestamps: false 
});


const createDonationsTable = async () => {
    try {
        await donations.sync({ alter: true }); 
        console.log("donations table created or updated successfully");
    } catch (error) {
        console.error("Failed to create donations table: ", error.message);
        throw new Error(error.message);
    }
};

export default createDonationsTable;
