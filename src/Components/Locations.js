import React from "react";
import { getAllLocations } from "../API/fetch";
import { useEffect, useState } from "react";
import LocationCard from "./LocationCard";

export default function Locations() {
  const [locations, setLocations] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [showBttn, setShowBttn] = useState(true);

  useEffect(() => {
    getAllLocations().then((data) => setLocations(data));
  }, []);

  const handleClick = () => {
    showCard ? setShowCard(false) : setShowCard(true);
    showBttn ? setShowBttn(false) : setShowBttn(true);
  };

  return (
    <div className="locations">
      <h1>List of Locations</h1>
      <br></br>
      <button onClick={handleClick}>
        {showBttn ? "Show Locations" : "Hide Locations"}
      </button>
      {showCard
        ? locations.map((location) => <LocationCard location={location} />)
        : null}
    </div>
  );
}
