const getElementCode = (ComponentName, svgCode) => `
  import React from 'react';
  const ${ComponentName} = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        ${svgCode}
      </svg>
    )
  };

  export default ${ComponentName}
`

module.exports = getElementCode