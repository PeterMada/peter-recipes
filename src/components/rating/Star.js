import React from 'react';

export const Star = ({ starOpacity }) => {
  let starFill = 'url(#half)';

  if (starOpacity === 0) {
    starFill = 'white';
  } else if (starOpacity === 100) {
    starFill = '#fed94b';
  }

  return (
    <>
      <svg width='32' height='32' viewBox='0 0 32 32'>
        <use
          xlinkHref='#star'
          fill={starFill}
          stroke={starFill === 'white' ? 'gray' : null}></use>
      </svg>
    </>
  );
};
