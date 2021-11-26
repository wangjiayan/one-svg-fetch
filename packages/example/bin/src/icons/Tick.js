
  import React from 'react';
  const Tick = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.493 6.221a.9.9 0 010 1.273l-9.428 9.428a.9.9 0 01-1.273 0l-4.286-4.285a.9.9 0 011.273-1.273l3.65 3.65L18.22 6.22a.9.9 0 011.272 0z"></path>
      </svg>
    )
  };

  export default Tick
