import React from 'react'

export default function LocationSearch(LocationSearch) {
    return (
        <div>
          <ul>
            <li>
              <span>Name: </span>
              {LocationSearch.name}
            </li>
            <li>
              <span>Climate: </span>
              {LocationSearch.climate}
            </li>
            <li>
              <span>Terrain: </span>
              {LocationSearch.terrain}
            </li>
          </ul>
        </div>
      );
}