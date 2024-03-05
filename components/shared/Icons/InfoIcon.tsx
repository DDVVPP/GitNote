import React from 'react';

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_297_2764)">
      <path
        d="M6 8V6M6 4H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
        className={className}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_297_2764">
        <rect width="12" height="12" fill="none" />
      </clipPath>
    </defs>
  </svg>
);

export default InfoIcon;
