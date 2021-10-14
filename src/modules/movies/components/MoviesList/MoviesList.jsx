import React, {useContext} from 'react';
import Movie from '../Movie/Movie';
import {MoviesContext} from '../../contexts/movies.context';
import {useFetchMovies} from '../../hooks/useFetchMovies';
import {isArrayWithData} from '../../utils/isArrayWithData/isArrayWithData';
import {STARS} from '../../constants/variables';
import {MoviesList as Component} from './MoviesList.styles';

const MoviesList = () => {
  const {movies} = useFetchMovies({category: 'movie/popular'});
  const {rating, searchResult} = useContext(MoviesContext);

  const moviesToRender = isArrayWithData(searchResult)
    ? searchResult
    : isArrayWithData(movies)
    ? movies
    : null;

  const filteredMovies = rating
    ? moviesToRender.filter(({vote_average: average}) => {
        return average >= STARS[rating].min && average <= STARS[rating].max;
      })
    : moviesToRender;

  return (
    <section id="movies-list">
      <h1>Popular Movies</h1>
      <h2>Rating: {rating}</h2>

      <Component.Container id="movies-list">
        {filteredMovies
          ? filteredMovies.map(movie => <Movie key={movie.id} movie={movie} />)
          : null}
      </Component.Container>
    </section>
  );
};

export default MoviesList;
