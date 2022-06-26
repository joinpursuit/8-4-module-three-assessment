import "./Movie.css"

const Movie = ({movie}) =>{
    console.log(movie)
    return (
        <div className="movie">
            <h1>Title: {movie.title}</h1>
            <p><span>Release Date:</span> {movie.release_date}</p>
            <p><span>Description:</span> {movie.description}</p>
            <img src={movie.image} alt={movie.title}/>
        </div>
    )
}

export default Movie;