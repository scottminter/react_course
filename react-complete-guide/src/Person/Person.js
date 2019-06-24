import React from 'react';
import styles from './Person.css';

const person = (props) => {
  // let r = Math.random();
  // if (r < 0.3) {
  //   throw new Error('Out of Bounds!');
  // }

  return (
    <div className={ styles.Person }>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!</p>
      <p>{ props.children }</p>
      <input type="text" onChange={ props.changed } value={ props.name }/>
    </div>
  );
}

export default person;
