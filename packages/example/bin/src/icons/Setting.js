
  import React from 'react';
  const Setting = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.442 3.289a2.9 2.9 0 00-2.9 0L5.18 6.384a2.9 2.9 0 00-1.45 2.512v6.19a2.9 2.9 0 001.45 2.512l5.362 3.095a2.9 2.9 0 002.9 0l5.36-3.095a2.9 2.9 0 001.45-2.512v-6.19a2.9 2.9 0 00-1.45-2.512l-5.36-3.095zm-2 1.559a1.1 1.1 0 011.1 0l5.36 3.095c.341.197.55.56.55.953v6.19a1.1 1.1 0 01-.55.953l-5.36 3.095a1.1 1.1 0 01-1.1 0L6.08 16.04a1.1 1.1 0 01-.55-.953v-6.19c0-.393.21-.756.55-.953l5.362-3.095zm-.87 7.143a1.42 1.42 0 112.84 0 1.42 1.42 0 01-2.84 0zm1.42-3.22a3.22 3.22 0 100 6.44 3.22 3.22 0 000-6.44z"></path>
      </svg>
    )
  };

  export default Setting
