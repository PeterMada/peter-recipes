import React from 'react';
import { Rating } from '../rating/Rating';
import burger from '../../assets/images/burger.jpg';
//import './RecipeSmall.scss';

export const RecipeSmall = ({ rating, outOf }) => {
  return (
    <div className='recipe-small'>
      <div className='recipe-small__img-wrap'>
        <img
          className='recipe-small__img-wrap--img'
          src={burger}
          alt='Burger'
        />
      </div>
      <div className='recipe-small__text'>
        <h2 className='recipe-small__text--heading'>
          <a href='/'>Baked Chicken and Sausage Gumbo</a>
        </h2>
        <p className='recipe-small__text--paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Rating rating={rating} outOf={outOf} />
        <p className='recipe-small__text--author'>
          By: <a href='/'>Chef John</a>
        </p>
      </div>
    </div>
  );
};
