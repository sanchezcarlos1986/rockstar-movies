import React from 'react';
import Overdrive from 'react-overdrive';
import {POSTER_PATH, BACKDROP_PATH} from '../../constants/variables';
import {Movie} from '../Movie/Movie.styles';
import {MovieDetail as Component} from './MovieDetail.styles';
import PropTypes from 'prop-types';
import {useFetchMovies} from '../../hooks/useFetchMovies';

const MovieDetail = ({match}) => {
  const {movies} = useFetchMovies({
    category: `movie/${match.params.id}`,
  });

  const movie = movies[0] || null;

  if (!movie) return null;

  return (
    <div>
      <Component.Container backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <Component.Info>
          <Overdrive id={movie.id}>
            <Movie.Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </Component.Info>
      </Component.Container>
    </div>
  );
};

MovieDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetail;
