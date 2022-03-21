import React from 'react';
import logo from '../../assets/images/peter-recipes-logo.jpg';
// import './styles.scss';

export const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo'>
        <img
          className='logo--img'
          src={logo}
          alt='Peter Recipes homepage'
        />
      </a>
    </header>
  );
};
