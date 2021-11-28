
  import React from 'react';
  const Mobile = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.9 5.143c0-.45.365-.814.814-.814h8.572c.45 0 .814.364.814.814v13.714c0 .45-.365.815-.814.815H7.714a.814.814 0 01-.814-.815V5.143zm.814-2.614A2.614 2.614 0 005.1 5.143v13.714a2.614 2.614 0 002.614 2.615h8.572a2.614 2.614 0 002.614-2.615V5.143a2.614 2.614 0 00-2.614-2.614H7.714zm4.073 15.006a1.496 1.496 0 100-2.992 1.496 1.496 0 000 2.992z"></path>
      </svg>
    )
  };

  export default Mobile
