function LocationCard({ location }) {
  const { name, climate, terrain } = location;

  return (
    <article className="locations">
      <ul>
        <li>Name: {name}</li>
        <li>Climate: {climate}</li>
        <li>Terrain: {terrain}</li>
      </ul>
    </article>
  );
}

export default LocationCard;
