import React, { useState, useEffect } from "react";


export default function Movies() {

    const [movies, setMovies] = useState([]);
    const [movieTitle, setMovieTitle] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [description, setDescription] = useState('')
   

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films`)
            .then((response) => response.json())
            .then((data) => setMovies(data))
    })


    const handleChange = (event) => {
        event.preventDefault();
        const input = event.target.value;
        // console.log(input)
        movies.map((movie) =>{
            if(input === movie.title){
                setMovieTitle(`Title: ${movie.title}`)
                setReleaseDate(`Release Date: ${movie.release_date}`)
                setDescription(`Description: ${movie.description}`)
            }
        })
        
    };

    return (
        <div className='movies'>
            <h1>Select a Movie</h1>
            <select onChange={handleChange}>
                {movies.map((movie) => {
                    return (
                        <option selected value={movie.title}>
                            {movie.title}
                        </option>
                    )}
                    )}
            </select>
            <h1>{movieTitle}</h1>
            <h3>{releaseDate}</h3>
            <h4>{description}</h4>
                    
        </div>
    )
}
