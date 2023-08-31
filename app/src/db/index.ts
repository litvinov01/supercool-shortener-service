import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
	host: "localhost",
	dialect: "mysql",
});

sequelize
	.authenticate()
	.then((res) => console.log("Connection has been established successfully."))
	.catch((error) => console.error("Unable to connect to the database:", error));
