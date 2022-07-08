import React from 'react'
import { Link } from 'react-router-dom'
//  const er = {
//     fontSize: '40px'
//  }
export default function Error() {
  return (
    <div>
      <img className='image' alt="err" width="700px" height="400px" src="https://media.istockphoto.com/photos/error-page-not-found-picture-id1153372686?b=1&k=20&m=1153372686&s=170667a&w=0&h=4veHHEjI5rq2qpYWMXcHSzXfrp22SMwa79DsqqiYfAw="></img>
      <br></br>
      <Link to ="/">Back to..<img alt="errr" src= 'https://cdn-icons-png.flaticon.com/512/16/16027.png' width="50px"></img></Link>
    </div>
  )
}