
  import React from 'react';
  const Refresh = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.032 7.293A7.6 7.6 0 0119.6 12a.9.9 0 101.8 0A9.4 9.4 0 003.858 7.3a.9.9 0 00.476 1.297l2.64.945a.9.9 0 10.607-1.695l-1.549-.554zM3.5 11.1a.9.9 0 01.9.9 7.6 7.6 0 0013.568 4.707l-1.549-.554a.9.9 0 01.606-1.695l2.64.945a.9.9 0 01.477 1.298A9.4 9.4 0 012.6 12a.9.9 0 01.9-.901z"></path>
      </svg>
    )
  };

  export default Refresh
