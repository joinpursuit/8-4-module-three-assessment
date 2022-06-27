const URL = "https://ghibliapi.herokuapp.com";

export function getAllMovies() {
  return fetch(`${URL}/films`).then((response) => response.json());
}

export function getAllPersons() {
  return fetch(`${URL}/people`).then((response) => response.json());
}

export function getAllLocations() {
  return fetch(`${URL}/locations`).then((response) => response.json());
}
