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

export interface IRegisterBody {
    id?: string;
	first_name?: string;
	middle_initial?: string;
	last_name?: string;
	username?: string;
	email?: string;
	password?: string;
	avatar_url?: string;
}