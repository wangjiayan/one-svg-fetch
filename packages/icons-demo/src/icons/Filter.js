
  import React from 'react';
  const Filter = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.611 3.907a.9.9 0 01.817-.521H20.57a.9.9 0 01.687 1.48l-6.645 7.858v7.847a.9.9 0 01-1.302.805l-3.429-1.714a.9.9 0 01-.497-.805v-6.133L2.74 4.867a.9.9 0 01-.13-.96zm2.757 1.279l5.604 6.627a.9.9 0 01.213.581v5.907l1.628.814v-6.72a.9.9 0 01.213-.582l5.605-6.627H5.368z"></path>
      </svg>
    )
  };

  export default Filter
