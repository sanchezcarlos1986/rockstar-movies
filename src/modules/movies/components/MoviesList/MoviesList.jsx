import React, {useContext} from 'react';
import Movie from '../Movie/Movie';
import {MoviesContext} from '../../contexts/movies.context';
import {useFetchMovies} from '../../hooks/useFetchMovies';
import {isArrayWithData} from '../../utils/isArrayWithData/isArrayWithData';
import {STARS} from '../../constants/variables';
import {MoviesList as Component} from './MoviesList.styles';

const MoviesList = () => {
  const {movies, isLoading} = useFetchMovies({category: 'movie/popular'});
  const {rating, searchResult, setShowForm} = useContext(MoviesContext);

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

  if (isLoading) return <p>loading...</p>;
  if (filteredMovies && !filteredMovies.length) return <p>No results</p>;

  if (filteredMovies && filteredMovies.length) setShowForm(true);

  return (
    <Component.Container id="movies-list">
      <h1>{`What's Popular`}</h1>
      <Component.List>
        {filteredMovies
          ? filteredMovies.map(movie => <Movie key={movie.id} movie={movie} />)
          : null}
      </Component.List>
    </Component.Container>
  );
};

export default MoviesList;
