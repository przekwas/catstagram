import type { Request, Response, NextFunction } from 'express';
import type { HTTPError } from '../types';

// handle 404 error and pass to global handler
export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
	const err: HTTPError = new Error(`path ${req.url} not found`);
	err.status = 404;
	next(err);
}

// global error handler for entire express app
export function errorHandler(err: HTTPError, req: Request, res: Response, next: NextFunction) {
	res.status(err.status || 500);
	res.json({ error: err.message.toLowerCase() });
}
