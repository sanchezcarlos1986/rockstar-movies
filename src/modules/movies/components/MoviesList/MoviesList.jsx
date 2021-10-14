import React, {useContext} from 'react';
import Movie from '../Movie/Movie';
import {MoviesContext} from '../../contexts/movies.context';
import {useFetchMovies} from '../../hooks/useFetchMovies';
import {isArrayWithData} from '../../utils/isArrayWithData/isArrayWithData';
import {MoviesList as Styles} from './MoviesList.styles';

const MoviesList = () => {
  const {movies} = useFetchMovies({category: 'movie/popular'});
  const {searchResult} = useContext(MoviesContext);

  const moviesToRender = isArrayWithData(searchResult)
    ? searchResult
    : isArrayWithData(movies)
    ? movies
    : null;

  return (
    <section id="movies-list">
      <h1>Popular Movies</h1>
      <Styles.Container id="movies-list">
        {moviesToRender
          ? moviesToRender.map(movie => <Movie key={movie.id} movie={movie} />)
          : null}
      </Styles.Container>
    </section>
  );
};

export default MoviesList;
