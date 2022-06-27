import React, {useState,useEffect} from 'react'

function Movies() {
  const [moviesData, setMoviesData] = useState([])
  useEffect(()=>{
    fetch(
      "https://ghibliapi.herokuapp.com/films"
      )
      .then((response) => response.json())
      .then((movies) => {
      
        console.log(movies)
        setMoviesData(movies)
        
  
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  return (
    <div>
      {moviesData.forEach((film)=>{
        <option>{film.title}</option>
      })
      }
    </div>
  )
}

export default Movies