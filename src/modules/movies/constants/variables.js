export const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
export const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

export const API_KEY = `bd0a7e9edaf44bb38b9df7f746364dac`;
export const BASE_URL = `https://api.themoviedb.org/3`;

export const tmdbURL = ({category, query = ''}) =>
  encodeURI(`${BASE_URL}/${category}?api_key=${API_KEY}&query=${query}`);

export const STARS = {
  one: {min: 0, max: 2},
  two: {min: 2, max: 4},
  three: {min: 4, max: 6},
  four: {min: 6, max: 8},
  five: {min: 8, max: 10},
};
