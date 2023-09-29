import React from 'react';
import styles from './index.module.css';

import Header from '../Header/Index'
import LandingContainer from '../LandingContent/Index'
export default function Index() {
  return (
    <div className={styles["landing-container"]}>
      <Header/>
      <LandingContainer/>
    </div>
  )
}
