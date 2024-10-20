import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js'; 


export const posts = sequelize.define('posts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    posted_by: {
        type: DataTypes.UUID,
        allowNull: false,
        references:{
            model:'registered_users',
            key:'id'
        }
    },
    location: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    date_posted: {
        type: DataTypes.DATEONLY, 
        defaultValue: sequelize.NOW, 
        allowNull: false

    },
    account_detail: {
        type: DataTypes.TEXT,
        allowNull:true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull:true
    },
}, {
    tableName: 'posts',
    timestamps: false 
});


const createPostsTable = async () => {
    try {
        await posts.sync({ alter: true }); 
        console.log("posts table created or updated successfully");
    } catch (error) {
        console.error("Failed to create posts table: ", error.message);
        throw new Error(error.message);
    }
};

export default createPostsTable;
