
  import React from 'react';
  const ArrowRight = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.364 18.636a.9.9 0 010-1.272l4.463-4.464H6a.9.9 0 010-1.8h9.827l-4.463-4.464a.9.9 0 111.272-1.272l6 6a.9.9 0 010 1.272l-6 6a.9.9 0 01-1.272 0z"></path>
      </svg>
    )
  };

  export default ArrowRight
