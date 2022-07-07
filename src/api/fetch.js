export function getApiData(endpoint) {
    return fetch('httpa://ghibliapi.herokuapp.com/${endpoint}').then(data=>data.json())
}