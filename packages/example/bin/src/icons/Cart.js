
  import React from 'react';
  const Cart = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.466 3.251a.9.9 0 100 1.8h2.366l.624 3.12a.897.897 0 00.014.072l1.296 6.471a2.451 2.451 0 002.441 1.973h7.525a2.452 2.452 0 002.442-1.974l1.242-6.515a.9.9 0 00-.884-1.068H8.083l-.631-3.156a.9.9 0 00-.883-.723H3.466zm6.065 11.112L8.444 8.93h11l-1.035 5.433-.001.002a.651.651 0 01-.65.522h-7.576a.651.651 0 01-.651-.524zm1.418 5.422a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm8.881 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
      </svg>
    )
  };

  export default Cart
