import React, { useState, useEffect } from "react";
import Location from "./Location";
function Locations() {
  const [locations, setLocations] = useState([]);
  const [show,setShow]= useState(false)
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);
  const handeCLick = ()  =>  {
show ? setShow(false) : setShow(true)
hidden? setHidden(false) : setHidden(true)
  }
  return (
    <div className="locations">
      <label>
        List of Locations
        <br></br>
        <button
          type="submit"
          className="show-hidden"
          onClick={handeCLick}>
          {hidden ? "Show Locations" : "Hide Locations"}
        </button>
        {show ? locations.map((location) => 
          <Location location={location} />) : null}
      
      </label>
    </div>
  );
}

export default Locations;
