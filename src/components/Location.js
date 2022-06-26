import "./Location.css"

const Location = ({location, sortName, sortClimate, sortTerrain}) =>{
    if(sortName){
        return (
            <div className="location">
                <ul>
                    <li>Climate: <span>{location.climate}</span></li>
                    <li>Name: <span>{location.name}</span></li>
                    <li>Terrain: <span>{location.terrain}</span></li>
                </ul>
            </div>
        )
    } else if(sortClimate){
        return (
            <div className="location">
                <ul>
                    <li>Climate: <span>{location.climate}</span></li>
                    <li>Terrain: <span>{location.terrain}</span></li>
                    <li>Name: <span>{location.name}</span></li>
                </ul>
            </div>
        )
    }else if(sortTerrain){
        return (
            <div className="location">
                <ul>
                    <li>Terrain: <span>{location.terrain}</span></li>
                    <li>Climate: <span>{location.climate}</span></li>
                    <li>Name: <span>{location.name}</span></li>
                </ul>
            </div>
        )
    }else{
        return (
            <div className="location">
                <ul>
                    <li>Name: <span>{location.name}</span></li>
                    <li>Climate: <span>{location.climate}</span></li>
                    <li>Terrain: <span>{location.terrain}</span></li>
                </ul>
            </div>
        )
    }
}

export default Location;