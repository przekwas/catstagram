import React from 'react';
import { Router } from 'react-router';
import { history } from '../utils';

import Navbar from '../components/Navbar';
import Routes from '../components/Routes';

const App = (props: AppProps) => {
	return (
		<Router history={history}>
			<Navbar />
			<Routes />
		</Router>
	);
};

interface AppProps {}

export default App;
