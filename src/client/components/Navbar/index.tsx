import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props: NavbarProps) => {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink exact to="/login">
				Login
			</NavLink>
			<NavLink exact to="/register">
				Register
			</NavLink>
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;
