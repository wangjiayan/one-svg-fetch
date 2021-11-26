
  import React from 'react';
  const Link = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.294 4.535a4.9 4.9 0 00-6.93 0L10.95 5.95l1.273 1.273 1.414-1.414a3.1 3.1 0 114.384 4.384l-2.829 2.829a3.1 3.1 0 01-4.384 0l-1.272 1.272a4.9 4.9 0 006.93 0l2.828-2.828a4.9 4.9 0 000-6.93zm-5 5a4.9 4.9 0 00-6.93 0l-2.829 2.829a4.9 4.9 0 106.93 6.93l1.414-1.415-1.273-1.273-1.414 1.414a3.1 3.1 0 01-4.384-4.384l2.828-2.828a3.1 3.1 0 014.917.711l1.581-.86c-.22-.404-.5-.783-.84-1.124z"></path>
      </svg>
    )
  };

  export default Link
