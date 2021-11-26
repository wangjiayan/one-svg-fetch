
  import React from 'react';
  const Image = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.185 6c0-.45.364-.814.814-.814h12c.45 0 .814.364.814.814v6.399l-2.749-2.75a.9.9 0 00-1.273 0l-9.103 9.104A.814.814 0 015.185 18V6zm10.243 5.559l3.385 3.385V18c0 .45-.364.814-.814.814H8.172l7.256-7.255zM5.999 3.386A2.614 2.614 0 003.385 6v12a2.614 2.614 0 002.614 2.614h12A2.614 2.614 0 0020.613 18V6A2.614 2.614 0 0018 3.386H6zM10.252 9a1.497 1.497 0 11-2.994 0 1.497 1.497 0 012.994 0z"></path>
      </svg>
    )
  };

  export default Image
