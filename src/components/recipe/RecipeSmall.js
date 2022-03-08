import React from 'react';
import burger from '../../assets/images/burger.jpg';
import './RecipeSmall.scss';

export const RecipeSmall = () => {
  return (
    <div>
      <div>
        <img src={burger} alt='Burger' />
      </div>
      <div>
        <h2>Baked Chicken and Sausage Gumbo</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          By: <a href='/'>Chef John</a>
        </p>
      </div>
    </div>
  );
};
