import React from 'react';
import { Rating } from '../rating/Rating';
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
        <Rating rating={3.5} outOf={5} />
        <p>
          By: <a href='/'>Chef John</a>
        </p>
      </div>
    </div>
  );
};
