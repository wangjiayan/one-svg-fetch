
  import React from 'react';
  const ChevronUp = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.636 16.136a.9.9 0 01-1.272 0L12 9.773l-6.364 6.363a.9.9 0 11-1.272-1.272l7-7a.9.9 0 011.272 0l7 7a.9.9 0 010 1.272z"></path>
      </svg>
    )
  };

  export default ChevronUp
