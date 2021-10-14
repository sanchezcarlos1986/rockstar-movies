import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';

const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {
  const [searchResult, setSearchResult] = useState('');

  const value = {
    searchResult,
    setSearchResult,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

MoviesContextProvider.propTypes = {
  children: PropTypes.node,
};

export {MoviesContext, MoviesContextProvider};
