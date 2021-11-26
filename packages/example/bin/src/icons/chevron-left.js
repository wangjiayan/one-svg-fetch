
  import React from 'react';
  const ChevronLeft = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.136 4.364a.9.9 0 010 1.272L9.773 12l6.363 6.364a.9.9 0 11-1.272 1.272l-7-7a.9.9 0 010-1.272l7-7a.9.9 0 011.272 0z"></path>
      </svg>
    )
  };

  export default ChevronLeft
