import type { Request } from 'express';
import type { UsersTable } from './sql_models';

export interface ReqUser extends Request {
	user?: IPayload;
}

export interface IPayload extends UsersTable {
	userid?: string;
}

export interface HTTPError extends Error {
	status?: number;
}
