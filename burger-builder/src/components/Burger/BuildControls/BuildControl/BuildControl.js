import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = props => {
  // console.log('type: ', props.label);
  // console.log('disable: ', props.disable);
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Less} onClick={props.removed} disabled={props.disable}>Less</button>
      <button className={styles.More} onClick={props.added}>More</button>
    </div>
  );
};

export default buildControl;
