import { Model, Sequelize } from "sequelize";
import { Link } from "../models";
import { sequelize } from "../db";
import { validateUrl } from "../utils/link-validation";
import { CacheService } from "./cache.service";

export class ShortenerService {
	private cacheService: CacheService;
	constructor(private linkModel = Link, private sequelizeClient: Sequelize = sequelize) {
		this.cacheService = new CacheService();
	}

	async getShortURL(url: string): Promise<string> {
		const isValid = validateUrl(url);
		if (!isValid) {
			throw new Error("URL is invalid!");
		}

		const cachedURL = this.cacheService.get(url);
		if (cachedURL) return cachedURL;

		await this.sequelizeClient.sync();
		const foundLink = await Link.findOne({
			where: {
				origin: url,
			},
		});

		if (!foundLink) {
			return await this.createShortlink(url);
		}
	}

	private async createShortlink(originURL): Promise<string> {
		return;
	}
}
