import React from 'react';
import { Star } from './Star';

export const Rating = ({ rating, outOf }) => {
  const fullStar = parseInt(rating);
  const halfStar = (rating % fullStar) * 100;

  return (
    <p aria-label={`Rating is ${rating} out of ${outOf}`}>
      <svg
        style={{ width: '32', height: '32' }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 32 32'>
        <defs>
          <linearGradient id='half' x1='0' x2='100%' y1='0' y2='0'>
            <stop offset='50%' stop-color='#fed94b'></stop>
            <stop offset='50%' stop-color='#f7f0c3'></stop>
          </linearGradient>

          <symbol
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            id='star'>
            <path d='M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z' />
          </symbol>
        </defs>
      </svg>

      {Array(parseInt(outOf))
        .fill(0)
        .map((element, index) => {
          let starOpacity = 100;
          if (index > fullStar) {
            starOpacity = 0;
          } else if (index === fullStar) {
            starOpacity = halfStar;
          }

          return <Star key={index} starOpacity={starOpacity} />;
        })}
    </p>
  );
};
