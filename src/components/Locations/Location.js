import React from 'react'

export default function Location({location}) {
    return (
        <div>
          <ul>
            <li>
              <span>Name: </span>
              {location.name}
            </li>
            <li>
              <span>Climate: </span>
              {location.climate}
            </li>
            <li>
              <span>Terrain: </span>
              {location.terrain}
            </li>
          </ul>
        </div>
      );
}