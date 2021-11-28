
  import React from 'react';
  const Import = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.365 14.208a.9.9 0 001.272 0l3.43-3.429a.9.9 0 10-1.274-1.273L12.901 11.4v-7.97a.9.9 0 10-1.8 0v7.97L9.21 9.505a.9.9 0 00-1.273 1.273l3.429 3.429z"></path><path d="M5.043 12a.9.9 0 10-1.8 0v6.857a2.614 2.614 0 002.614 2.614h12.286a2.614 2.614 0 002.614-2.614V12a.9.9 0 00-1.8 0v6.857a.814.814 0 01-.814.814H5.857a.814.814 0 01-.814-.814V12z"></path>
      </svg>
    )
  };

  export default Import
