
  import React from 'react';
  const ChevronRight = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.864 4.364a.9.9 0 011.272 0l7 7a.9.9 0 010 1.272l-7 7a.9.9 0 11-1.272-1.272L14.227 12 7.864 5.636a.9.9 0 010-1.272z"></path>
      </svg>
    )
  };

  export default ChevronRight
