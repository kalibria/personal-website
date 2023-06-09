import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from './asideBar.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import linkedIn from '../imgs/linkedin.svg';



export default function AsideBar () {
  return (<aside className={styles.asideBarContainer}>
    <div className={styles.photoAndContactsContainer}>
    <div className={styles.myPhotoContainer} />
      <header className={styles.asideBarHeader}>
        <h1>MARIA KUSHLIANSKAYA</h1>
        <p>FRONT-END DEVELOPER</p>
        <hr/>
      </header>
    </div>
    <ul className={styles.contactsList}>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} width={14} height={14}/>+375 29 292 34 04</li>
      <li className={`${styles.contactListItem} + ${styles.asideBarEmail}`} ><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon} width={14} height={14}/><p className={styles.asideBarEmailText}>mariakazakova92@gmail.com</p></li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon} width={14} height={14}/><a href={'https://kalibria.online'} target={'_blank'}>kalibria.online</a></li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon} width={14} height={14}/>Relocating to Poland</li>
      <li className={styles.contactListItem}><Image
        src={'/github.svg'} width={14} height={14} alt={'Github'} className={styles.listIcon}/><a href={'https://github.com/kalibria'} target={'_blank'}>kalibria</a></li>
      <li className={styles.contactListItem}>
        <Image
          src={linkedIn}  width={14} height={14} alt={'Linkedin'} className={styles.listIcon}/>
        <a href={'https://www.linkedin.com/in/mariya-kushlianskaya-228b3889/'} target={'_blank'}>mariya-kushlianskaya</a></li>

    </ul>

    <div>
      <h3 className={styles.subtitle}>SKILLS</h3>
      <hr/>
      <ul className={styles.list}>
        <li>Javascript, Typescript</li>
        <li>React, Redux</li>
        <li>HTML5/CSS3</li>
        <li>Jest</li>
        <li>Git</li>
      </ul>
    </div>

    <div>
      <h3 className={styles.subtitle}>LANGUAGES</h3>
      <hr/>
      <ul className={styles.list}>
        <li>Russian - native</li>
        <li>English - intermediate</li>
        <li>Polish - elementary</li>
      </ul>
    </div>

    <div>
      <h3 className={styles.subtitle}>EDUCATION</h3>
      <hr/>
      <ul className={styles.list} >
        <li>
          <b>2020 - present:</b> pet projects, documentation and theory studies, IT-centric English practice, work with mentor
        </li>
        <li>
          <b>2009 - 2014:</b> Belarusian State University of Economics
        </li>
      </ul>
    </div>

  </aside>)

}
