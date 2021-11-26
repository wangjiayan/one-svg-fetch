
  import React from 'react';
  const Share = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.363 2.792a.9.9 0 011.273 0l3.429 3.429a.9.9 0 11-1.273 1.273L12.9 5.6v8.97a.9.9 0 01-1.8 0v-8.97L9.208 7.494A.9.9 0 117.935 6.22l3.428-3.429zM4.143 11.1a.9.9 0 01.9.9v6.857a.814.814 0 00.814.815h12.286a.814.814 0 00.814-.815V12a.9.9 0 011.8 0v6.857a2.615 2.615 0 01-2.614 2.615H5.857a2.615 2.615 0 01-2.614-2.615V12a.9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default Share
