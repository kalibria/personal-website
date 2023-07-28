import React from 'react';
import Button from '../button/button';
import AsideBar from '../asideBar/AsideBar'
import MainInfo from '../mainInfo/MainInfo';
import styles from './resume.module.css';


function Resume() {
  return (<div className={styles.resumePage}>
      <Button />
      <div className={styles.resumeContainer}>
        <AsideBar/>
        <MainInfo/>
      </div>
  </div>

  )
}

export default Resume;
