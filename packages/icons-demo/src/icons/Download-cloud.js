
  import React from 'react';
  const DownloadCloud = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.424 3.15a7.078 7.078 0 016.902 4.644c.992.026 2.103.166 3.124.913a4.761 4.761 0 01-.072 7.737.9.9 0 01-1.036-1.472 2.962 2.962 0 00.045-4.813c-.722-.528-1.534-.57-2.724-.57a.9.9 0 01-.872-.677 5.278 5.278 0 10-9.066 4.81.9.9 0 11-1.348 1.192A7.078 7.078 0 019.424 3.15zm2.578 8.955a.9.9 0 01.9.9v4.778l1.553-1.553a.9.9 0 111.272 1.273l-3.089 3.089a.9.9 0 01-1.272 0l-3.09-3.09A.9.9 0 019.55 16.23l1.553 1.553v-4.778a.9.9 0 01.9-.9z"></path>
      </svg>
    )
  };

  export default DownloadCloud
