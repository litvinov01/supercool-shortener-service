import express from "express";
import { ShortenerService } from "../services";
export const shortURLRouter = express.Router();

const shortenerService = new ShortenerService();

shortURLRouter.post("/", async (req, res) => {
	const { url } = req.body;
	const shortenedURL = await shortenerService.getShortURL(url);

	res.send(shortenedURL);
});
