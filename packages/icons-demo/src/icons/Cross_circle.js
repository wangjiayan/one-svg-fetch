
  import React from 'react';
  const CrossCircle = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM8.957 7.543a1 1 0 00-1.414 1.414L10.586 12l-3.043 3.043a1 1 0 101.414 1.414L12 13.414l3.043 3.043a1 1 0 001.414-1.414L13.414 12l3.043-3.043a1 1 0 00-1.414-1.414L12 10.586 8.957 7.543z"></path>
      </svg>
    )
  };

  export default CrossCircle
