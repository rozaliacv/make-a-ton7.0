import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 
export const registered_users = sequelize.define('registered_users', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
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
    tableName: 'registered_users',
    timestamps: false  
});


const createRegisteredusersTable = async () => {
    try {
        await registered_users.sync({ alter: true });
        console.log("registered_users table created or updated successfully");
    } catch (error) {
        console.error("Failed to create registered_users table: ", error.message);
        throw new Error(error.message);
    }
};

export default createRegisteredusersTable;
