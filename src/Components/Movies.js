import React, { useState } from 'react';


const Movies = ({ allGhibliFilms }) => {
  const [allGhibliTitles, setAllGhibliTitles] = useState();

  const allTitles = allGhibliFilms.map((film) => {
    return (
      <option key={film.id} value={film.title}>
        {film.title}
      </option>
    )
  })

  

  return (
    <div className='movies'>
        <h2>Select a Movie</h2>
        <form>
          <select>
            <option value=''>
            </option>
            {allTitles}
          </select>
        </form>
    </div>
  );
};

export default Movies;