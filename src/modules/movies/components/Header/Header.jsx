import React from 'react';
import {Link} from 'react-router-dom';
import {SearchBar} from '../SearchBar';
import {Header as Component} from './Header.styles';

const Header = () => {
  return (
    <Component.Container>
      <Link to="/">
        <img
          src="https://www.rockstarcoders.com/content/themes/rsc-theme/uneets/src/assets/imgs/rsc-new-logo.png"
          alt="logo"
        />
      </Link>
      <SearchBar />
    </Component.Container>
  );
};

export default Header;
