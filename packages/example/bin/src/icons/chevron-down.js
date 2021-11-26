
  import React from 'react';
  const ChevronDown = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.363 7.863a.9.9 0 011.273 0L12 14.227l6.363-6.364a.9.9 0 011.273 1.273l-7 7a.9.9 0 01-1.273 0l-7-7a.9.9 0 010-1.273z"></path>
      </svg>
    )
  };

  export default ChevronDown
