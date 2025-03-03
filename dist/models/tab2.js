import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig"; // Adjust the path to your Sequelize instance
// Define the model
export class Tab2 extends Model {
    id;
    image;
    description;
    // Timestamps
    createdAt;
    updatedAt;
}
// Initialize the model
Tab2.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true, // Set `false` if description is mandatory
    },
}, {
    sequelize, // Pass the Sequelize instance
    tableName: "tab2", // Adjust table name as required
    timestamps: true, // Enable createdAt and updatedAt fields
});
