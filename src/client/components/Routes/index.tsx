import React from 'react';
import { Route, Switch } from 'react-router';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				{() => <h1>home</h1>}
			</Route>
			<Route exact path="/login">
				{() => <h1>login</h1>}
			</Route>
			<Route exact path="/register">
				{() => <h1>register</h1>}
			</Route>
		</Switch>
	);
};

export default Routes;
