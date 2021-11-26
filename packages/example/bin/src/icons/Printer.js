
  import React from 'react';
  const Printer = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6 3.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v5.05h.8a2.6 2.6 0 012.6 2.6v4.25a2.6 2.6 0 01-2.6 2.6H18v2.5a.9.9 0 01-.9.9H6.9a.9.9 0 01-.9-.9V18h-.8a2.6 2.6 0 01-2.6-2.6v-4.25a2.6 2.6 0 012.6-2.6H6V3.5zm-.8 6.85a.8.8 0 00-.8.8v4.25a.8.8 0 00.8.8H6v-2.5a.9.9 0 01.9-.9h10.2a.9.9 0 01.9.9v2.5h.8a.8.8 0 00.8-.8v-4.25a.8.8 0 00-.8-.8H5.2zm11-1.8H7.8V4.4h8.4v4.15zm0 6.05H7.8v5h8.4v-5z"></path>
      </svg>
    )
  };

  export default Printer
