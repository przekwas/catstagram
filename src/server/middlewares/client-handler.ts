import path from 'path';
import type { Request, Response } from 'express';

export const CLIENT_ROUTES = ['/', '/login', '/register'];

export function clientHandler(req: Request, res: Response) {
	res.sendFile(path.join(__dirname, '../public/index.html'));
}
