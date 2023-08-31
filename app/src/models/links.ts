import { DataTypes, ModelAttributes } from "sequelize";
import { sequelize } from "../db";

const linksAttributes: ModelAttributes = {
	shortlink: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	origin: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	numberOfCreation: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 1,
	},
};

export const Link = sequelize.define("links", linksAttributes);

sequelize
	.sync()
	.then((res) => console.log("Links table successfully created"))
	.catch((err) => console.error(err));
