import React from "react";

import "./icons.scss";

/**
 * Reply Icon- Left facing Icon for reply
 * @returns Reply Icon component
 */
export const ReplyIcon = () => (
  <div className='icons'>
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 14L4 9L9 4'
        stroke='black'
        strokeOpacity='0.6'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20 20V13C20 11.9391 19.5786 10.9217 18.8284 10.1716C18.0783 9.42143 17.0609 9 16 9H4'
        stroke='black'
        strokeOpacity='0.6'
        strokeWidth='1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </div>
);