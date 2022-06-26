import "./Location.css";

const Location = ({ location, sort }) => {
  if (sort) {
    return (
      <div className="location">
        <ul>
          <li>
            <span className="span-one">Name: </span>
            <span className="span-two">{location.name}</span>
          </li>
          <li>
            <span className="span-one">Climate: </span>
            <span className="span-two">{location.climate}</span>
          </li>
          <li>
            <span className="span-one">Terrain: </span>
            <span className="span-two">{location.terrain}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="location">
        <ul>
          <li>
            <span className="span-one">Name: </span>
            <span className="span-two">{location.name}</span>
          </li>
          <li>
            <span className="span-one">Climate: </span>
            <span className="span-two">{location.climate}</span>
          </li>
          <li>
            <span className="span-one">Terrain: </span>
            <span className="span-two">{location.terrain}</span>
          </li>
        </ul>
      </div>
    );
  }
};

export default Location;
