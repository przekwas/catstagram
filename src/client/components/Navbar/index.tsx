import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = (props: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="py-4 text-indigo-100 bg-indigo-900">
			<div className="flex items-center justify-between px-6">
				<div>
					<span role="img" aria-label="cat face" className="mr-2">
						🐱
					</span>
					Catstagram
				</div>
				<GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
			</div>
			{isOpen && (
				<div className="flex flex-col items-end px-6">
					<NavLink
						exact
						to="/"
						className="my-4 font-extralight"
						activeClassName="font-extrabold text-base text-pink-500">
						Home
					</NavLink>
					<NavLink
						exact
						to="/login"
						className="my-4 font-extralight"
						activeClassName="font-extrabold text-base text-pink-500">
						Login
					</NavLink>
					<NavLink
						exact
						to="/register"
						className="my-4 font-extralight"
						activeClassName="font-extrabold text-base text-pink-500">
						Register
					</NavLink>
				</div>
			)}
		</nav>
	);
};

interface NavbarProps {}

export default Navbar;
