
  import React from 'react';
  const Cross = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.364 5.364a.9.9 0 011.272 0L12 10.727l5.364-5.363a.9.9 0 011.272 1.272L13.273 12l5.363 5.364a.9.9 0 11-1.272 1.272L12 13.273l-5.364 5.363a.9.9 0 11-1.272-1.272L10.727 12 5.364 6.636a.9.9 0 010-1.272z"></path>
      </svg>
    )
  };

  export default Cross
