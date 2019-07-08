import React from 'react';
import Layout from './components/Layout/Layout';
import styles from './App.module.css';

/**
 * IMPORTANT
 * In 16.8 naming a css file as .modules.css will allow you to use it
 * as a css modules
 */

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <p>Can you see me?</p>
      </Layout>
    </div>
  );
}

export default App;
