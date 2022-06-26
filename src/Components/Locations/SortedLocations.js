import React from 'react'

function SortedLocations({ locations, sortedLocations }) {
    const sorted = (key) => {
        return locations.sort((a, b) => {
            let x = a[key];
            let y = b[key];

            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    if (sortedLocations === 'all') {
        return (
            <ul className='card-container'>
                {locations.map(location => {
                    return (
                        <ul className='location-cards' id={location.id}>
                            <li><span>Name: </span>{location.name}</li>
                            <li><span>Climate: </span>{location.climate}</li>
                            <li><span>Terrain: </span>{location.terrain}</li>
                        </ul>
                    )
                })}


            </ul>
        )
    }
    else {
        return (
            <ul className='card-container'>
                {sorted(sortedLocations).map(el => {
                    return (
                        <ul className='location-cards' id={el.id}>
                            <li key={Math.floor(Math.random() * 500)}><span>Name: </span>{el.name}</li>
                            <li key={Math.floor(Math.random() * 500)}><span>Climate: </span>{el.climate}</li>
                            <li key={Math.floor(Math.random() * 500)}><span>Terrain: </span>{el.terrain}</li>
                        </ul>
                    )
                })}
            </ul>

        )
    }
}



export default SortedLocations