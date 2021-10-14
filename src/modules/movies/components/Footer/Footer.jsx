import React from 'react';
import {Link} from 'react-router-dom';
import {Footer as Component} from './Footer.styles';

const Footer = () => {
  return (
    <Component.Container>
      <Link to="/">
        <img
          src="https://www.rockstarcoders.com/content/themes/rsc-theme/uneets/src/assets/imgs/rsc-new-logo.png"
          alt="logo"
        />
      </Link>
      <div>{new Date().getFullYear()}</div>
    </Component.Container>
  );
};

export default Footer;
