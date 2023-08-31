declare global {
	namespace NodeJS {
		interface ProcessEnv {
			APP_PORT: number;
			BASE_NAME: string;
			REDIS_PORT: number;
			REDIS_HOST: string;
			REDIS_PASSWORD: string;

			MYSQL_DATABASE: string;
			MYSQL_USER: string;
			MYSQL_PASSWORD: string;
			MYSQL_ROOT_PASSWORD: string;
		}
	}
}
export {};
