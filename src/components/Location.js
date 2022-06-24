const Location = ({location}) =>{
    return (
        <div className="location">
            <p><span>Name: </span>{location.name}</p>
            <p><span>Climate: </span>{location.climate}</p>
            <p><span>Terrain: </span>{location.terrain}</p>
        </div>
    )
}

export default Location;