import { Redis } from "ioredis";
import { redis } from "../cache";

export class CacheService {
	constructor(private redisClient: Redis = redis) {}

	add(originURL: string, shortURL: string): boolean {
		this.redisClient.set(originURL, shortURL);

		return true;
	}

	async get(originURL: string): Promise<string> {
		return await this.redisClient.get(originURL);
	}
}
