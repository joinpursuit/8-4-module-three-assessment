import React from 'react'
import LocationSearch from './LocationSearch'

export default function LocationFind() {
    const [LocationFind, setLocationFind] = useState([]);
    const [show,setShow]= useState(false)
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
      fetch("https://ghibliapi.herokuapp.com/locations")
        .then((res) => res.json())
        .then((data) => setLocationFind(data));
    }, []);
    const handeCLick = ()  =>  {
  show ? setShow(false) : setShow(true)
  hidden? setHidden(false) : setHidden(true)
    }
    return (
      <div className="location">
        <label>
          List of Locations
          <br></br>
          <button
            type="submit"
            className="show-hidden"
            onClick={handeCLick}>
            {hidden ? "Show LocationFind" : "Hide LocationFind"}
          </button>
          {show ? LocationFind.map((LocationSearch) => 
            <LocationSearch location={location} />) : null}
  
        </label>
      </div>
    );
}