import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 


const donor_details = sequelize.define('donor_details', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    location: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    transportation: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    donated_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model:'donors',
            key:'id'
        }
    }
}, {
    tableName: 'donor_details',
    timestamps: false 
});


const createDonordetailsTable = async () => {
    try {
        await donor_details.sync({ alter: true }); 
        console.log("donor_details table created or updated successfully");
    } catch (error) {
        console.error("Failed to create donor_details table: ", error.message);
        throw new Error(error.message);
    }
};

export default createDonordetailsTable;
