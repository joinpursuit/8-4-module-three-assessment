/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import studioGhibliLogo from '../images/studio-ghibli-logo3.jpeg';

const NavBar = () => {
	return (
		<nav className='navbar'>
			<ul className='nav-center'>
				<li>
					<Link to='/'>
						<img
							src={studioGhibliLogo}
							alt='studio ghibli logo'
							width='50px'
							height='50px'
						/>
					</Link>
				</li>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/movies'>Movies</Link>
				</li>
				<li>
					<Link to='/people'>People</Link>
				</li>
				<li>
					<Link to='/locations'>Locations</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
