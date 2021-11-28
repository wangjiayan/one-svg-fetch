
  import React from 'react';
  const Min = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.243 12a.9.9 0 01.9-.9h13.714a.9.9 0 010 1.8H5.143a.9.9 0 01-.9-.9z"></path>
      </svg>
    )
  };

  export default Min
