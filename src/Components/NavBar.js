/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import studioGhibliLogo from '../images/studio-ghibli-logo3.jpeg';

const NavBar = () => {
	const [color, changeColor] = useState('azure');

	document.body.style.backgroundColor = color;

	return (
		<nav className='navbar'>
			<ul className='nav-center'>
				<li>
					<Link to='/' onClick={() => changeColor('azure')}>
						<img
							src={studioGhibliLogo}
							alt='studio ghibli logo'
							width='50px'
							height='50px'
						/>
					</Link>
				</li>
				<li>
					<Link to='/movies' onClick={() => changeColor('lightblue')}>
						Movies
					</Link>
				</li>
				<li>
					<Link to='/people' onClick={() => changeColor('lightyellow')}>
						People
					</Link>
				</li>
				<li>
					<Link to='/locations' onClick={() => changeColor('violet')}>
						Locations
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
