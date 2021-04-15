import passport from 'passport';
import config from '../config';
import { Application } from 'express';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';

export function configurePassport(app: Application) {
	passport.serializeUser((user, done) => done(null, user));
	passport.deserializeUser((user, done) => done(null, user));

	passport.use(
		new JWTStrategy(
			{
				jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
				secretOrKey: config.jwt.secret
			},
			(payload, done) => {
				done(null, payload);
			}
		)
	);

	app.use(passport.initialize());
}
