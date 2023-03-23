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
            <>
                {locations.map(location => {
                    return (
                        <li>
                            <ul className='location-cards' id={location.id}>
                                <li><span>Name:</span> <span>{location.name}</span></li>
                                <li><span>Climate:</span> <span>{location.climate}</span></li>
                                <li><span>Terrain:</span> <span>{location.terrain}</span></li>
                            </ul>
                        </li>
                    )
                })}
            </>
        )
    }
    else {
        return (
            <>
                {sorted(sortedLocations).map(el => {
                    return (
                        <li >
                            <ul className='location-cards' id={el.id}>
                                <li><span>Name:</span> <span>{el.name}</span></li>
                                <li><span>Climate:</span> <span>{el.climate}</span></li>
                                <li><span>Terrain:</span> <span>{el.terrain}</span></li>
                            </ul>
                        </li>
                    )
                })}
            </>

        )
    }
}



export default SortedLocations