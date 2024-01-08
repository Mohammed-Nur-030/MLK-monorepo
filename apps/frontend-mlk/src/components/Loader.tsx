// components/Loader2.js
import React from 'react';
import styles from '../styles/Loader.module.css'; // Import the CSS file containing the styles

const Loader2 = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderBefore}></div>
    </div>
  );
};

export default Loader2;
