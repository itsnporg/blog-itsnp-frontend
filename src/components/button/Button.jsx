import React from 'react';

import './Button.scss';

export const Button = ({ label }) => {
  return (
    <>
      <button className='button '>
        <span className='button__label button__label--active'>{label}</span>
      </button>
    </>
  );
};
