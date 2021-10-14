import React from 'react';
import {tmdbURL} from '../constants/variables';

export const useFetchMovies = ({category, query, shouldSearch = true}) => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const url = tmdbURL({category: category, query: query});

  React.useEffect(() => {
    if (shouldSearch) {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);

          if (data.errors) {
            setMovies([]);
          } else {
            const result = data.results || [data];
            setMovies(result);
          }
        })
        .catch(err => console.error(err));
    }
  }, [query]);

  return {movies, isLoading};
};

export default useFetchMovies;
