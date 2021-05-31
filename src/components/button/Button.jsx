import React from 'react';

import './Button.scss';

export const Button = ({ label }) => {
  return (
    <>
      <button className='button '>
        <div className='button__label button__label--active'>{label}</div>
      </button>
    </>
  );
};
