import React from "react";

import "./icons.scss";

/**
 *
 * @returns Verified member Icon component
 */
export const VerifiedIcon = () => (
  <div className='icon'>
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='11' cy='11' r='11' fill='black' />
      <path d='M15 8L9.5 13.5L7 11' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  </div>
);
