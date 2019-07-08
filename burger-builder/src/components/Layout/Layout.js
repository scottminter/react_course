import React from 'react';
import styles from './Layout.module.css';
import Aux from './../../hoc/Aux.js';

const layout = props => {
  return (
    <Aux>
      <div className={styles.layout}>
        Toolbar, Sidedrawer, Backdrops
      </div>
      <main>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;
