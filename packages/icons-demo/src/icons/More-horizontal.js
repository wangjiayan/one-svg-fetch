
  import React from 'react';
  const MoreHorizontal = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path><path d="M12 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path><path d="M18 10.393a1.607 1.607 0 100 3.214 1.607 1.607 0 000-3.214z"></path>
      </svg>
    )
  };

  export default MoreHorizontal
