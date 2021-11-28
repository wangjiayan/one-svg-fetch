
  import React from 'react';
  const ChevronsSortUp = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.001 4.243a.9.9 0 01.637.263l4.285 4.286a.9.9 0 11-1.272 1.273L12 6.415l-3.649 3.65a.9.9 0 11-1.273-1.273l4.286-4.286A.9.9 0 0112 4.243z"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 19.758a.9.9 0 01-.636-.264l-4.286-4.286a.9.9 0 011.273-1.273l3.65 3.65 3.649-3.65a.9.9 0 111.272 1.273l-4.285 4.286a.9.9 0 01-.637.264z"></path>
      </svg>
    )
  };

  export default ChevronsSortUp
