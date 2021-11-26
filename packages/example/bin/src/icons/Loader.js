
  import React from 'react';
  const Loader = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.1 4a.9.9 0 01.9-.9 8.901 8.901 0 010 17.8 8.9 8.9 0 01-8.744-10.568.9.9 0 111.769.336A7.1 7.1 0 1012 4.9a.9.9 0 01-.9-.9z"></path>
      </svg>
    )
  };

  export default Loader
