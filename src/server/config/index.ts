import dotenv from 'dotenv';

const envFound = dotenv.config();

if (!envFound) {
	throw new Error('no env file found');
}

export default {
	mysql: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_SCHEMA,
		connectionLimit: Number(process.env.DB_POOL_LIMIT)
	},
	app: {
		port: process.env.PORT
	},
	jwt: {}
};
