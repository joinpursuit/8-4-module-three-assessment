/** @format */

const baseURL = 'https://ghibliapi.herokuapp.com';

export async function getYoutubeVideos(searchTerm, maxResults) {
	const response = await fetch(`${baseURL}search?&key=${API_KEY}
    &part=snippet&maxResults=${maxResults}&q=${searchTerm}`);
	return await response.json();
}
