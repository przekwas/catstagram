import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import routes from './routes';
import config from './config';
import {
	clientHandler,
	CLIENT_ROUTES,
	configurePassport,
	errorHandler,
	notFoundHandler
} from './middlewares';

const app = express();

app.get('/status', (req, res) => res.status(200).end());
app.head('/status', (req, res) => res.status(200).end());

configurePassport(app);
app.use(cors());
app.use(compression());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);
app.get(CLIENT_ROUTES, clientHandler);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(config.app.port, () => console.log(`Server listening on port: ${config.app.port}`)).on(
	'error',
	err => {
		console.log(err);
		process.exit(1);
	}
);
