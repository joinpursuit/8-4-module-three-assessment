import { useState, useEffect } from "react";
import Movie from "./Movie";
import "./Movies.css"

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState();

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(data => setMovies(data))
    }, [])

    const handleSelection = (e) =>{
        const value = e.target.value;
        setSelectedMovie(movies.find(movie => movie.id === value));
    }

    return (
        <div className="movies">
            <h1>Select a Movie</h1>
            <form>
                <select onChange={handleSelection}>
                    <option value=""></option>
                    {movies.map(movie =>{
                        return <option value={movie.id} key={movie.id}>{movie.title}</option>
                    })}
                </select>
            </form>
            <section>
                {selectedMovie ? <Movie movie={selectedMovie}/> : null}
            </section>
        </div>
    )
}

export default Movies;