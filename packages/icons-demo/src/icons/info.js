
  import React from 'react';
  const Info = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M12.899 12.567a.9.9 0 00-1.8 0v3.429a.9.9 0 101.8 0v-3.429z"></path><path d="M12 10.252a1.264 1.264 0 100-2.53 1.264 1.264 0 000 2.53z"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.999 2.528a9.471 9.471 0 100 18.943 9.471 9.471 0 000-18.943zM4.327 12a7.671 7.671 0 1115.343 0 7.671 7.671 0 01-15.343 0z"></path>
      </svg>
    )
  };

  export default Info
