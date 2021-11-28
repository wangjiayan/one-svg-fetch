
  import React from 'react';
  const Plus = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 4.243a.9.9 0 01.9.9V11.1h5.957a.9.9 0 010 1.8H12.9v5.957a.9.9 0 01-1.8 0V12.9H5.143a.9.9 0 110-1.8H11.1V5.143a.9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default Plus
