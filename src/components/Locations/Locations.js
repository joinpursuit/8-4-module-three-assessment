
import Location from "./Location"
import React,{ useState, useEffect,} from 'react';

export default function Locations() {
    const [locations, setlocations] = useState([]);
    const [show,setShow]= useState(false)
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((data) => setlocations(data));
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
            <Locations location={location} />) : null}
  
        </label>
      </div>
    );
}