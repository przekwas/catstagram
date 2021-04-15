import jwt from 'jsonwebtoken';
import config from '../config';
import { IPayload } from '../types';

export function signToken(payload: IPayload) {
	try {
		const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expires });
		return token;
	} catch (err) {
		throw err;
	}
}
