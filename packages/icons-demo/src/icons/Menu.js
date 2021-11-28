
  import React from 'react';
  const Menu = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.385 6.857a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 110 1.8H4.285a.9.9 0 01-.9-.9zm0 5.143a.9.9 0 01.9-.9h15.429a.9.9 0 010 1.8H4.285a.9.9 0 01-.9-.9z"></path>
      </svg>
    )
  };

  export default Menu
