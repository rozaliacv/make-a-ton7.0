import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 
export const donors = sequelize.define('donors', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
}, {
    tableName: 'donors',
    timestamps: false  
});


const createDonorsTable = async () => {
    try {
        await donors.sync({ alter: true });
        console.log("donors table created or updated successfully");
    } catch (error) {
        console.error("Failed to create donors table: ", error.message);
        throw new Error(error.message);
    }
};

export default createDonorsTable;
