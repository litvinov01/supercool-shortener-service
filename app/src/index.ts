import express from "express";
import { config } from "dotenv";
import { shortURLRouter } from "./routers";
config();

const app = express();

app.listen(process.env.APP_PORT, () => {
	console.log("Server started on port", process.env.APP_PORT);
});

app.get("/", (req, res) => {
	try {
		res.send("Main page!");
	} catch (e) {
		console.error(e);
	}
});

app.use("short", shortURLRouter);
