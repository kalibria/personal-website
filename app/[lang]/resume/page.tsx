"use client";
import React, {useState} from 'react';
import LangButton from '../components/buttons/ToggleButton';
import Button from '../components/buttons/button';
import AsideBar from '../components/asideBar/AsideBar'
import MainInfo from '../components/mainInfo/MainInfo';
import styles from './resume.module.css';


function Page() {
  return (<div className={styles.resumePage}>
      <Button handleClick={e => window.print()} inscription={"Print"}/>
      <LangButton/>
      <div className={styles.resumeContainer}>
        <AsideBar/>
        <MainInfo/>
      </div>
  </div>

  )
}

export default Page;
