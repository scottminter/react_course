import React from 'react';
import styles from './Price.module.css';

const price = props => (
  <p>{props.label}: <span className={styles.Price}>${props.price.toFixed(2)}</span></p>
);

export default price;