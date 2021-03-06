import React, {useContext} from 'react';
import {MoviesContext} from '../../contexts/movies.context';
import useFetchMovies from '../../hooks/useFetchMovies';
import {SearchBar as Component} from './SearchBar.styles';

const SearchBar = () => {
  const [value, setValue] = React.useState('');
  const {movies} = useFetchMovies({
    category: 'search/movie',
    query: value,
    shouldSearch: Boolean(value && value.length > 3),
  });

  const {setSearchResult} = useContext(MoviesContext);

  React.useEffect(() => {
    if (value && movies.length) {
      setSearchResult(movies);
    } else {
      setSearchResult([]);
    }
  }, [movies, value]);

  return (
    <Component.Container id="search-bar">
      <Component.TextInput
        placeholder="Search for a movie..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Component.Container>
  );
};

export default SearchBar;
