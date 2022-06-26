const Location = ({location}) =>{
    return (
        <div className="location">
            <ul>
                <li>
                    <span>Name: </span>{location.name}
                    {/* <br/>
                    <span>Climate: </span>{location.climate}
                    <br/>
                    <span>Terrain: </span>{location.terrain} */}
                    </li>
                <li><span>Climate: </span>{location.climate}</li>
                <li><span>Terrain: </span>{location.terrain}</li>
            </ul>
        </div>
    )
}

export default Location;