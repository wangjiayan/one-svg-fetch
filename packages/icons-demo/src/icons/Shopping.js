
  import React from 'react';
  const Shopping = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.543 2.717a.9.9 0 01.72-.36h10.285a.9.9 0 01.72.36l2.572 3.428a.9.9 0 01.18.54v12a2.615 2.615 0 01-2.614 2.615h-12a2.614 2.614 0 01-2.615-2.615v-12a.9.9 0 01.18-.54l2.572-3.428zm1.17 1.44L6.49 5.785H18.32l-1.221-1.628H7.713zM19.22 7.585H5.591v11.1a.814.814 0 00.815.815h12a.814.814 0 00.814-.815v-11.1zM8.977 9.214a.9.9 0 01.9.9 2.528 2.528 0 105.057 0 .9.9 0 111.8 0 4.329 4.329 0 01-8.657 0 .9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default Shopping
