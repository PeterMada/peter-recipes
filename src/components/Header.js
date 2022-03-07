import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/peter-recipes-logo.jpg';

export const Header = () => {
  return (
    <header>
      <Link href='/'>
        <img src={logo} alt='Peter Recipes' />
      </Link>
    </header>
  );
};
