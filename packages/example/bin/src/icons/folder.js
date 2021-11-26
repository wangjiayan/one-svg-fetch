
  import React from 'react';
  const Folder = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M5.142 5.186A.814.814 0 004.328 6v12a.814.814 0 00.814.815h13.714a.814.814 0 00.815-.815V8.572a.814.814 0 00-.815-.814h-7.714a.9.9 0 01-.749-.401l-1.447-2.17H5.142zM3.293 4.152a2.614 2.614 0 011.849-.766h4.286a.9.9 0 01.749.4l1.447 2.172h7.232a2.614 2.614 0 012.615 2.614V18a2.614 2.614 0 01-2.615 2.615H5.142A2.614 2.614 0 012.528 18V6c0-.693.275-1.358.765-1.848z"></path>
      </svg>
    )
  };

  export default Folder
