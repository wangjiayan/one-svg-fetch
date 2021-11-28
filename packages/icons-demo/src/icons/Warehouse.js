
  import React from 'react';
  const Warehouse = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.9 4a.9.9 0 00-1.122-.873l-9 2.286a.9.9 0 00-.678.872V20a.9.9 0 00.9.9h16a.9.9 0 00.9-.9v-8.8a.9.9 0 00-.63-.859L13.9 8.339V4zm0 6.226V19.1h1.7v-1.6a.9.9 0 011.8 0v1.6h1.7v-7.24l-5.2-1.634zM12.1 9V5.157L4.9 6.985V19.1h7.2V9zM8 9.1a.9.9 0 01.9.9v2a.9.9 0 11-1.8 0v-2a.9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default Warehouse
