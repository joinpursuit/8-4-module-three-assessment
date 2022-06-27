import React, { useState, useEffect } from "react";

export default function Location() {
    const [location, setLocation] = useState([]);
    const [nameButton, setNameButton] = useState('');
    const [climateButton, setClimateButton] = useState('');
    const [terrainButton, setTerrainButton] = useState('')
    const [name, setName] = useState('');
    const [climate, setClimate] = useState('');
    const [terrain, setTerrain] = useState('');

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations`)
            .then((response) => response.json())
            .then((data) => setLocation(data))
    })

    const handleSearch = (event) => {
        event.preventDefault();
        setNameButton(<button onClick={handleName} type="submit">Sort by Name</button>)
        setClimateButton(<button onClick={handleClimate} type="submit">Sort by Climate</button>)
        setTerrainButton(<button onClick={handleTerrain} type="submit">Sort by Terrain</button>)

    }

    const handleName = (event) => {
        event.preventDefault();
        let sortName = location.sort((a, b) => a.name.localeCompare(b.name)) 
        // console.log(sortName)

        sortName.map((x) => {
            // console.log(x.name)
            setName(`Name: ${x.name}`)
            setClimate(`Climate: ${x.climate}`)
            setTerrain(`Terrain: ${x.terrain}`)
        })

    }

    const handleClimate = (event) => {
        event.preventDefault();
        const sortClimate = location.sort((a, b) => a.climate.localeCompare(b.climate))
        // console.log(sortClimate)

        sortClimate.map((x) => {
            setClimate(`Climate: ${x.climate}`)
            setName(`Name: ${x.name}`)
            setTerrain(`Terrain: ${x.terrain}`)

        })
    }

    const handleTerrain = (event) => {
        event.preventDefault();
        const sortTerrain = location.sort((a, b) => a.terrain.localeCompare(b.terrain))
        // console.log(sortTerrain)
        sortTerrain.map((x) => {
            setTerrain(`Terrain: ${x.terrain}`)
            setName(`Name: ${x.name}`)
            setClimate(`Climate: ${x.climate}`)

        })
    }

    return (
        <div className='location'>
            <h1>List of Locations</h1>
            <button onClick={handleSearch} type="submit">Show Locations</button>
            <div>
                {nameButton}
                {climateButton}
                {terrainButton}
            </div>

            <div className="locationList">
                {location.map((loc) => {
                    return (
                        <>
                            <h2>{name}</h2>
                            <h2>{climate}</h2>
                            <h2>{terrain}</h2>
                        </>
                    )
                })}
                
            </div>
        </div>
    )
}
