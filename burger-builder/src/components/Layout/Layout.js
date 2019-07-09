import React from 'react';
import styles from './Layout.module.css';
import Aux from './../../hoc/Aux.js';

const layout = props => {
  return (
    <Aux>
      <div>
        Toolbar, Sidedrawer, Backdrops
      </div>
      <main className={styles.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
