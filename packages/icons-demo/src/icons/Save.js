
  import React from 'react';
  const Save = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M8.6 10a.9.9 0 01.9-.9h5a.9.9 0 010 1.8h-5a.9.9 0 01-.9-.9z"></path><path fillRule="evenodd" clipRule="evenodd" d="M19 20.9a1.9 1.9 0 001.9-1.9V8.406A5.306 5.306 0 0015.595 3.1H5A1.9 1.9 0 003.1 5v14c0 1.05.851 1.9 1.9 1.9h14zM5 4.9a.1.1 0 00-.1.1v14a.1.1 0 00.1.1h2.1V15c0-1.049.851-1.9 1.9-1.9h6c1.05 0 1.9.851 1.9 1.9v4.1H19a.1.1 0 00.1-.1V8.406A3.505 3.505 0 0015.595 4.9H5zm10.1 14.2V15a.1.1 0 00-.1-.1H9a.1.1 0 00-.1.1v4.1h6.2z"></path>
      </svg>
    )
  };

  export default Save
