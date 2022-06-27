import React,{useState, useEffect} from 'react';
import LocationsCard from './LocationsCard';

const LocationsPage = ({ locations, setLocations }) => {
// console.log(setLocations)
    const [byName, setByName] = useState(false);
    const [byClimate, setByClimate] = useState(false);
    const [byTerrain, setByTerrain] = useState(false);
    const [notSorted, setNotSorted] = useState(true);

    const sortedName = (event) => {
        event.preventDefault()

        setLocations(
            locations.sort((a, b) => {
                const name1 = a.name.toUpperCase();
                const name2 = b.name.toUpperCase();
                if (name1 < name2) {
                    return -1;
                }
                if (name1 > name2) {
                    return 1;
                }
                return 0;
            })
        )
        setByName(true);
        setByClimate(false);
        setByTerrain(false);
        setNotSorted(true);

    }

    const sortedClimate = (event) => {
        event.preventDefault()

        setLocations(
            locations.sort((a, b) => {
                const climate1 = a.climate.toUpperCase();
                const climate2 = b.climate.toUpperCase();
                if (climate1 < climate2) {
                    return -1;
                }
                if (climate1 > climate2) {
                    return 1;
                }
                return 0;
            })
        )
        setByName(false);
        setByClimate(true);
        setByTerrain(false);
        setNotSorted(true);

    }

    const sortedTerrain = (event) => {
        event.preventDefault()

        setLocations(
            locations.sort((a, b) => {
                const terrain1 = a.terrain.toUpperCase();
                const terrain2 = b.terrain.toUpperCase();
                if (terrain1 < terrain2) {
                    return -1;
                }
                if (terrain1 > terrain2) {
                    return 1;
                }
                return 0;
            })
        )
        setByName(true);
        setByClimate(false);
        setByTerrain(false);
        setNotSorted(true);

    }
  return (
    <div>
        <button onClick={sortedName}>SORT BY NAME</button>
        <button onClick={sortedClimate}>SORT BY CLIMATE</button>
        <button onClick={sortedTerrain}>SORT BY TERRAIN</button>
        <section>
            {locations.map((location) => {
                return (
                    <ul>
                        {notSorted? <LocationsCard location={location} /> : null}
                    </ul>
                )
            })}
        </section>

    </div>
  )
}

export default LocationsPage;