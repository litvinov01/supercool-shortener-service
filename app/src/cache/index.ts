import { Redis } from "ioredis";
import { config } from "dotenv";
config();
const redisConnectionArgs = {
	port: Number(process.env.REDIS_PORT), // Redis port
	host: process.env.REDIS_HOST,
};

console.log("connecting, to redis... Payload =", redisConnectionArgs);

//{ port: , host: process.env.REDIS_HOST }
export const redis = new Redis(redisConnectionArgs);

console.log("Redis client successfully connected");
