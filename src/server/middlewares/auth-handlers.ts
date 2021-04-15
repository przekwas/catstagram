import { authenticate } from 'passport';
import type { NextFunction, Request, Response } from 'express';

export function checkToken (req: Request, res: Response, next: NextFunction) {
    authenticate('jwt', (err, user, info) => {

        if (err) {
            return next(err);
        }

        if (info) {
            return next(info);
        }

        if (user) {
            req.user = user;
        }

        next();

    })(req, res, next);
}