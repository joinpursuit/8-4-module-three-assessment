import React from 'react'
import './People.css'

function People() {
  return (
    <>
        <header className='people'>
            <h1>Search for a person</h1>
            <form className='submit'>
                <input type="text"/>
                <button type='submit'>SUBMIT</button>
            </form>
        </header>
    </>
  )
}

export default People