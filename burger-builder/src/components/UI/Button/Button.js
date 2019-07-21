import React from 'react';
import styles from './Button.module.css';

const button = props => (
  <button
    className={[styles.Button, styles[props.buttonType]].join(' ')} //must be Success or Danger
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
