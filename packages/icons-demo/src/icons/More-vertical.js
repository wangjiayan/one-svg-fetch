
  import React from 'react';
  const MoreVertical = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path><path d="M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path><path d="M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"></path><path d="M11.143 12a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path><path d="M11.143 18a.857.857 0 101.715 0 .857.857 0 00-1.715 0z"></path><path d="M11.143 6a.857.857 0 101.714 0 .857.857 0 00-1.714 0z"></path>
      </svg>
    )
  };

  export default MoreVertical
