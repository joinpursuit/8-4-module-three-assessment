import React from 'react';
import LocationsCard from './LocationsCard';

const LocationsPage = ({ locations }) => {
  return (
    <div>
        <button>SORT BY NAME</button>
        <button>SORT BY CLIMATE</button>
        <button>SORT BY TERRAIN</button>
        <section>
            {locations.map((location) => {
                return (
                    <ul>
                        <LocationsCard location={location} />
                    </ul>
                )
            })}
        </section>

    </div>
  )
}

export default LocationsPage;