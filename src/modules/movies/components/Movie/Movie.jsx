import React from 'react';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Movie as Component} from './Movie.styles';
import {POSTER_PATH} from '../../constants/variables';

const Movie = ({movie}) => {
  return (
    <div id={`movie-${movie.id}`}>
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
        <Overdrive id={movie.id.toString()}>
          <Component.Poster
            alt={movie.title}
            src={`${POSTER_PATH}${movie.poster_path}`}
          />
        </Overdrive>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
