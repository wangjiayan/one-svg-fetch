
  import React from 'react';
  const BookOpen = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M2.527 4.286a.9.9 0 01.9-.9H8.57A4.329 4.329 0 0112 5.072a4.328 4.328 0 013.428-1.686h5.143a.9.9 0 01.9.9v12.857a.9.9 0 01-.9.9h-6a1.672 1.672 0 00-1.671 1.671.9.9 0 01-1.8 0 1.671 1.671 0 00-1.672-1.671h-6a.9.9 0 01-.9-.9V4.286zM11.1 16.672a3.472 3.472 0 00-1.672-.43h-5.1V5.187H8.57A2.529 2.529 0 0111.1 7.714v8.958zm1.8 0a3.472 3.472 0 011.671-.43h5.1V5.187h-4.243A2.528 2.528 0 0012.9 7.714v8.958z"></path>
      </svg>
    )
  };

  export default BookOpen
