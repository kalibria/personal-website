import {IMainInfo} from 'app/[lang]/components/mainInfo/interfaces';
import {getDictionary} from 'app/[lang]/dictionaries';
import {Locale} from 'i18n.config';
import styles from './mainInfo.module.css'

export default  function MainInfo({mainInfo}:IMainInfo ){

  return <>
    <main className={styles.mainContainer}>
      <header>
        <h1>{mainInfo.aboutMaria.name}</h1>
        <p className={styles.text}>{mainInfo.aboutMaria.role}</p>
        <hr/>
      </header>
      <article>

        <div className={styles.textContainer}>
          <p>{mainInfo.aboutMaria.introduction}</p>
          <p>{mainInfo.aboutMaria.proudProject1} <a
            href="https://github.com/kalibria/Family-car-booking-app#readme" target={'_blank'}>Family Car Booking App</a>{mainInfo.aboutMaria.proudProject2} </p>
          <p className={styles.nonPrintable}>{mainInfo.aboutMaria.petProjects1} <a href={'https://github.com/kalibria'}>github.com/kalibria</a>) {mainInfo.aboutMaria.petProjects2}</p>

          <ul>
            <b>{mainInfo.highlightedWords.mySkills}</b>
            <li><b>{mainInfo.highlightedWords.languages}</b> {mainInfo.skills.languages}</li>
            <li><b>{mainInfo.highlightedWords.reactEcosystem}</b> {mainInfo.skills.reactEcosystem}</li>
            <li><b>{mainInfo.highlightedWords.styling}</b> {mainInfo.skills.styling}</li>
            <li><b>{mainInfo.highlightedWords.other}</b> {mainInfo.skills.other}</li>
          </ul>

          <ul className={styles.list}>
            <b>{mainInfo.highlightedWords.whyMe}</b>
            <li>{mainInfo.whyMe.modularCode}</li>
            <li>{mainInfo.whyMe.componentDesign}</li>
            <li>{mainInfo.whyMe.mappers}</li>
            <li>{mainInfo.whyMe.structure}</li>
            <li>{mainInfo.whyMe.workflow}</li>
            <li>{mainInfo.whyMe.learnTech}</li>
          </ul>

          <p className={styles.nonPrintable}>{mainInfo.currentProject}.</p>
          <p className={styles.nonPrintable}>{mainInfo.futurePlans}
          </p>
          <p className={styles.nonPrintable}>{mainInfo.eagerToWork}</p>
          <p>{mainInfo.contribution} </p>

        </div>
      </article>
    </main>
  </>
}
