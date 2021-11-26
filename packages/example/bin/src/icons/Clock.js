
  import React from 'react';
  const Clock = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 4.329a7.671 7.671 0 100 15.343 7.671 7.671 0 000-15.343zM2.527 12a9.471 9.471 0 1118.943 0 9.471 9.471 0 01-18.943 0zm9.471-6.043a.9.9 0 01.9.9v4.587l2.931 1.465a.9.9 0 11-.805 1.61l-3.428-1.714a.9.9 0 01-.498-.805V6.857a.9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default Clock
