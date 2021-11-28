
  import React from 'react';
  const DollarSign = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.671a.9.9 0 01.9.9V5.1h3.386a.9.9 0 110 1.8H12.9v4.2h1.243a3.9 3.9 0 110 7.8H12.9v2.528a.9.9 0 01-1.8 0V18.9H6.857a.9.9 0 010-1.8H11.1v-4.2H9.857a3.9 3.9 0 010-7.8H11.1V2.57a.9.9 0 01.9-.9zM11.1 6.9H9.857a2.1 2.1 0 100 4.2H11.1V6.9zm1.8 6v4.2h1.243a2.1 2.1 0 000-4.2H12.9z"></path>
      </svg>
    )
  };

  export default DollarSign
