import { useState } from "react";
import Location from "./Location";

const Locations = () => {
    const [visible, setVisible] = useState(false);
    const [locations, setLocations] = useState([]);

    const handleLocations = (e) =>{
        e.preventDefault();
        setVisible(true);

        fetch("https://ghibliapi.herokuapp.com/locations")
        .then(res => res.json())
        .then(data => setLocations(data))
    }

    console.log(locations)

    return (
        <div className="locations">
            <h1>List of Locations</h1>
            <button type="submit" onClick={handleLocations}> {!visible ? "Show Locations" : "Hide Locations"}</button>
            <section className="locations-list">
            {visible ? locations.map(location => <Location location={location}/>) : null}
            </section>
        </div>
    )
}

export default Locations;