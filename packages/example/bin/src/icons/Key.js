
  import React from 'react';
  const Key = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M16.173 9.005a1.248 1.248 0 11-2.495 0 1.248 1.248 0 012.495 0z"></path><path fillRule="evenodd" clipRule="evenodd" d="M14.876 2.476a6.633 6.633 0 00-6.171 9.071l-1.312 1.306-.01-.011a1.4 1.4 0 00-1.98 0l-1.794 1.793a1.4 1.4 0 000 1.98l.01.01-.51.51a1.4 1.4 0 000 1.98l1.79 1.79a1.4 1.4 0 001.988-.008l5.536-5.623a6.633 6.633 0 102.452-12.799zm-4.834 6.633a4.833 4.833 0 112.599 4.287l-.59-.308-6.164 6.259-1.222-1.222 1.5-1.5-1-1 1.227-1.228.999 1 3.494-3.48-.304-.587a4.81 4.81 0 01-.539-2.22z"></path>
      </svg>
    )
  };

  export default Key
