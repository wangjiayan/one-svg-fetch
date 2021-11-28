
  import React from 'react';
  const Hash = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.528 3.392a.9.9 0 01.795.994l-.46 4.143h2.994a.9.9 0 010 1.8h-3.195l-.371 3.343h3.566a.9.9 0 110 1.8H15.09l-.482 4.342a.9.9 0 01-1.79-.199l.46-4.143H9.95l-.483 4.342a.9.9 0 11-1.79-.199l.461-4.143H5.143a.9.9 0 110-1.8h3.194l.371-3.343H5.143a.9.9 0 010-1.8h3.765l.483-4.342a.9.9 0 111.789.199l-.46 4.143h3.331l.483-4.342a.9.9 0 01.994-.795zm-1.677 6.937H10.52l-.372 3.343h3.332l.371-3.343z"></path>
      </svg>
    )
  };

  export default Hash
