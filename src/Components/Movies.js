/** @format */

import React from 'react';
import Select from 'react-select';
import Async, { useAsync } from 'react-select/async';

const Movies = () => {
	return (
		<div className='movies'>
			<h2>Select a Movie</h2>
			<Select />
		</div>
	);
};

export default Movies;
