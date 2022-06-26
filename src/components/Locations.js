import { useState, useEffect } from "react";
import Location from "./Location";
import "./Locations.css"

const Locations = () => {
    const [visible, setVisible] = useState(false);
    const [locations, setLocations] = useState([]);
    const [sortName, setSortName] = useState(false);
    const [sortClimate, setSortClimate] = useState(false);
    const [sortTerrain, setSortTerrain] = useState(false);

    useEffect(() =>{
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res => res.json())
        .then(data => setLocations(data))
    }, [])

    const locationsCopied = [...locations];

    const section = () =>{
        if(visible){
            if(sortName){
                return locationsCopied.sort((a, b) => {
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return -1
                    }
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1
                    }
                    return 0
                }).map(location =>{
                    return (
                        <ul>
                            <li><Location location={location} sortName={sortName} sortClimate={sortClimate} sortTerrain={sortTerrain}/></li>
                        </ul>
                    )
                })
            };
            
            if(sortClimate){
                return locationsCopied.sort((a, b) => {
                    if(a.climate.toLowerCase() < b.climate.toLowerCase()){
                        return -1
                    }
                    if(a.climate.toLowerCase() > b.climate.toLowerCase()){
                        return 1
                    }
                    return 0
                }).map(location =>{
                    return (
                        <ul>
                            <li><Location location={location} sortName={sortName} sortClimate={sortClimate} sortTerrain={sortTerrain}/></li>
                        </ul>
                    )
                })
            };
            
            if(sortTerrain){
                return locationsCopied.sort((a, b) => {
                    if(a.terrain.toLowerCase() < b.terrain.toLowerCase()){
                        return -1
                    }
                    if(a.terrain.toLowerCase() > b.terrain.toLowerCase()){
                        return 1
                    }
                    return 0
                }).map(location =>{
                    return (
                        <ul>
                            <li><Location location={location} sortName={sortName} sortClimate={sortClimate} sortTerrain={sortTerrain}/></li>
                        </ul>
                    )
                })
            };

            return locations.map(location => {
                return (
                    <ul>
                        <li><Location location={location} sortName={sortName} sortClimate={sortClimate} sortTerrain={sortTerrain}/></li>
                    </ul>
                )
            })
        }else{
            return null;
        };
    }

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <section className="buttons">
            <button type="submit" className="show" onClick={() => !visible ? setVisible(true) : setVisible(false)}> {!visible ? "Show Locations" : "Hide Locations"}</button>
            {visible ? <button type="submit" className="name" onClick={() => !sortName ? setSortName(true) : setSortName(false)}>Sort by Name</button> : null}
            {visible ? <button type="submit" className="climate" onClick={() => !sortClimate ? setSortClimate(true) : setSortClimate(false)}>Sort by Climate</button> : null}
            {visible ? <button type="submit" className="terrain" onClick={() => !sortTerrain ? setSortTerrain(true) : setSortTerrain(false)}>Sort by Terrain</button> : null}
            </section>
            {section()}
        </div>
    )
}

export default Locations;