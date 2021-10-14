import React, {useContext} from 'react';
import Overdrive from 'react-overdrive';
import {Link} from 'react-router-dom';
import {POSTER_PATH, BACKDROP_PATH} from '../../constants/variables';
import {Movie} from '../Movie/Movie.styles';
import {MovieDetail as Component} from './MovieDetail.styles';
import PropTypes from 'prop-types';
import {useFetchMovies} from '../../hooks/useFetchMovies';
import {dateFormatter} from '../../utils/isArrayWithData/dateFormatter';
import {MoviesContext} from '../../contexts/movies.context';

const MovieDetail = ({match}) => {
  const {setShowForm} = useContext(MoviesContext);

  const {movies, isLoading} = useFetchMovies({
    category: `movie/${match.params.id}`,
  });

  const movie = movies[0] || null;

  if (isLoading) return <p>Loading...</p>;
  if (!movie) return null;
  if (movie) setShowForm(false);

  return (
    <div>
      <Component.Container backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <Link to="/">
          <span className="fa">Go Back</span>
        </Link>
        <Component.Info>
          <Overdrive id={movie.id}>
            <Movie.Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          </Overdrive>
          <Component.Details>
            <Component.TitleContainer>
              <h1>{movie.title}</h1>
              <Component.Rate>{movie.vote_average}</Component.Rate>
            </Component.TitleContainer>
            <Component.Date>{dateFormatter(movie.release_date)}</Component.Date>

            <p>{movie.overview}</p>
          </Component.Details>
        </Component.Info>
      </Component.Container>
    </div>
  );
};

MovieDetail.propTypes = {
  match: PropTypes.object.isRequired,
};

export default MovieDetail;
