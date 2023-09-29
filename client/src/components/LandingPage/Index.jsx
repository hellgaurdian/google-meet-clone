import React from 'react';
import styles from './index.module.css';

import Header from '../Header/Index'
export default function Index() {
  return (
    <div className={styles["landing-container"]}>
      <Header/>
    </div>
  )
}
