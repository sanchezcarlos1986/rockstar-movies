import React, {useState, createContext} from 'react';
import PropTypes from 'prop-types';

const MoviesContext = createContext();

const MoviesContextProvider = ({children}) => {
  const [searchResult, setSearchResult] = useState('');
  const [rating, setRating] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const value = {
    searchResult,
    setSearchResult,
    rating,
    setRating,
    showForm,
    setShowForm,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};

MoviesContextProvider.propTypes = {
  children: PropTypes.node,
};

export {MoviesContext, MoviesContextProvider};
