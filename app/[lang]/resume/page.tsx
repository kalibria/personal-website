import {PrintButton} from 'app/[lang]/components/buttons/PrintButton';
import {Locale} from '../../../i18n.config';
import {getDictionary} from '../dictionaries';
import React from 'react';
import LangButton from '../components/buttons/ToggleButton';
import Button from '../components/buttons/button';
import AsideBar from '../components/asideBar/AsideBar'
import MainInfo from '../components/mainInfo/MainInfo';
import styles from './resume.module.css';


async function Page({
                      params: {lang}
                    }: {
  params: { lang: Locale }
}) {

  const {buttons} = await getDictionary(lang);
  const textButton = buttons.print;

  return (<div className={styles.resumePage}>
      <PrintButton text={textButton}/>
      <LangButton/>
      <div className={styles.resumeContainer}>
        <AsideBar/>
        <MainInfo/>
      </div>
    </div>

  )
}

export default Page;
