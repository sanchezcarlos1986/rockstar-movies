import React from 'react';
import Overdrive from 'react-overdrive';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Movie as Component} from './Movie.styles';
import {POSTER_PATH} from '../../constants/variables';
import {dateFormatter} from '../../utils/isArrayWithData/dateFormatter';

const Movie = ({movie}) => {
  return (
    <Component.Container id={`movie-${movie.id}`}>
      <Link to={`/movie/${movie.id}`}>
        <Overdrive id={movie.id.toString()}>
          <Component.Poster
            alt={movie.title}
            src={`${POSTER_PATH}${movie.poster_path}`}
          />
        </Overdrive>
        <Component.Title>{movie.title}</Component.Title>
        <Component.Date>{dateFormatter(movie.release_date)}</Component.Date>
      </Link>
    </Component.Container>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
