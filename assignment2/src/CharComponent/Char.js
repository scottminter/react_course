import React from 'react';
import './Char.css';

const charComponent = (props) => {
  return (
      <p className="char-component" onClick={ props.clicked }>Index: { props.index } Character: { props.character }</p>
  );
};

export default charComponent;
