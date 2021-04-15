import mysql from 'mysql';
import config from '../config';
import type { MySqlResponse } from '../types';

const pool = mysql.createPool(config.mysql);

export const Query = <T = MySqlResponse>(query: string, values?: any) => {
	return new Promise<T>((resolve, reject) => {
		const sql = mysql.format(query, values);

		console.log('------');
		console.log('executing formatted query:');
		console.log(sql);
		console.log('------');

		pool.query(sql, (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
};

export * as users from './queries/users';