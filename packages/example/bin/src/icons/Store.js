
  import React from 'react';
  const Store = (props) => {
    const { color, size = 24, ...rst } = props
    return (
      <svg width={size} height={size}  {...rst} xmlns="http://www.w3.org/2000/svg">
        <path d="M9.6 16.5a.9.9 0 01.9-.9h3a.9.9 0 010 1.8h-3a.9.9 0 01-.9-.9z"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.559 5.054A3.9 3.9 0 017.342 2.1h9.316a3.9 3.9 0 013.783 2.954l1.432 5.727c.035.142.1.284.069.418.03.136-.033.28-.07.424-.25.977-1.025 1.685-1.972 2.034V18a2.9 2.9 0 01-2.9 2.9H7A2.9 2.9 0 014.1 18v-4.344c-.948-.348-1.722-1.056-1.972-2.033-.037-.143-.086-.29-.055-.425-.031-.133.018-.274.054-.417l1.432-5.727zm2.34 8.823V18A1.1 1.1 0 007 19.1h10a1.1 1.1 0 001.1-1.1v-4.123c-.847-.093-1.67-.46-2.239-1.043-.201.15-.416.279-.63.385-.872.437-2.016.681-3.23.681s-2.358-.244-3.23-.68a4.184 4.184 0 01-.63-.386c-.57.583-1.393.95-2.24 1.043zM18.696 5.49l1.427 5.709c-.118.4-.675.901-1.597.901-1.104 0-1.624-.676-1.625-1.1a.9.9 0 00-1.8 0c0 .028-.046.295-.674.61-.574.286-1.43.49-2.426.49-.995 0-1.852-.204-2.426-.49-.628-.315-.674-.582-.674-.61a.9.9 0 10-1.8 0c0 .423-.52 1.1-1.625 1.1-.922 0-1.48-.502-1.597-.902L5.305 5.49A2.1 2.1 0 017.342 3.9h9.316a2.1 2.1 0 012.037 1.59z"></path>
      </svg>
    )
  };

  export default Store
