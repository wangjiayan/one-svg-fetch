
  import React from 'react';
  const Search = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.142 5.186a5.957 5.957 0 104.13 10.25.913.913 0 01.163-.162 5.957 5.957 0 00-4.292-10.088zm6.085 10.77a7.757 7.757 0 10-1.273 1.273l3.123 3.122a.9.9 0 101.273-1.273l-3.123-3.123z"></path>
      </svg>
    )
  };

  export default Search
