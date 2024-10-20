
import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.config.js';

export const allocations = sequelize.define('allocations', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    donation_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'donations',
            key: 'id'
        }
    },
    requirement_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'requirements',
            key: 'id'
        }
    },
    quantity_allocated: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'allocations',
    timestamps: false
});

const createAllocationsTable = async () => {
    try {
        await allocations.sync({ alter: true });
        console.log("Allocations table created or updated successfully");
    } catch (error) {
        console.error("Failed to create allocations table: ", error.message);
        throw new Error(error.message);
    }
};

export default createAllocationsTable;
