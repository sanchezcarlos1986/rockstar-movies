import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {SearchBar} from '../SearchBar';
import {Rating} from '../Rating';
import {Header as Component} from './Header.styles';
import {MoviesContext} from '../../contexts/movies.context';

const Header = () => {
  const {showForm} = useContext(MoviesContext);

  return (
    <Component.Container>
      <Link to="/">
        <img
          src="https://www.rockstarcoders.com/content/themes/rsc-theme/uneets/src/assets/imgs/rsc-new-logo.png"
          alt="logo"
        />
      </Link>
      {showForm ? (
        <div>
          <SearchBar />
          <Rating />
        </div>
      ) : null}
    </Component.Container>
  );
};

export default Header;
