
  import React from 'react';
  const Order = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.726 19.619V4.38h1.759v1.501c0 .74.574 1.456 1.416 1.456h6.206c.837 0 1.419-.711 1.41-1.461V4.38h1.758V19.62H5.726zM14.718 4.38H9.285v1.157h5.433V4.38zm.384-1.8h3.441c.782 0 1.532.608 1.532 1.488v15.864c0 .88-.75 1.487-1.532 1.487H5.458c-.782 0-1.532-.607-1.532-1.488V4.069c0-.88.75-1.488 1.532-1.488H15.1zm-7.348 8.954a.9.9 0 01.9-.9h6.963a.9.9 0 110 1.8H8.654a.9.9 0 01-.9-.9zm.9 2.638a.9.9 0 100 1.8h6.963a.9.9 0 000-1.8H8.654z"></path>
      </svg>
    )
  };

  export default Order
