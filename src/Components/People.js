import React from 'react'

function People() {
  return (
    <>
        <header className='people'>
            <h1>Search for a person</h1>
            <form>
                <input type="text"/>
                <button type='submit'>SUBMIT</button>
            </form>
        </header>
    </>
  )
}

export default People