import React from 'react';
import './Input.css';

const inputComponent = (props) => {
  return (
    <div className="input-component">
      <input placeholder="Enter Some Text" onChange={ props.changed } value={ props.chars }></input>
      <p>The text has { props.charCount } chars in it. </p>
      <p>And { props.wordCount } words in it. </p>
    </div>
  );
};

export default inputComponent;
