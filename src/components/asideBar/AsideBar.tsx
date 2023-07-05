import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styles from './asideBar.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import linkedIn from '../imgs/linkedin.svg'


export default function AsideBar () {
  return (<aside className={styles.asideBarContainer}>
    <div className={styles.myPhotoContainer}/>

    <ul className={styles.contactsList}>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} width={18} height={18}/>+375 29 292 34 04</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon} width={18} height={18}/>mariakazakova92@gmail.com</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon} width={18} height={18}/>kalibria.online</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon} width={18} height={18}/>Belarus. Ready to relocate</li>
      <li className={styles.contactListItem}><Image
        src={'/github.svg'} width={18} height={18} alt={'Github'} className={styles.listIcon}/><a href={'https://github.com/kalibria'} target={'_blank'}>kalibria</a></li>
      <li className={styles.contactListItem}><Image
        src={linkedIn} width={18} height={18} alt={'Linkedin'} className={styles.listIcon}/><a href={'https://www.linkedin.com/in/mariya-kushlianskaya-228b3889/'} target={'_blank'}>mariya-kushlianskaya</a></li>
    </ul>

    <div>
      <h3 className={styles.subtitle}>SKILLS</h3>
      <hr/>
      <ul className={styles.list}>
        <li>HTML5/CSS3</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Redux Toolkit</li>
        <li>Jest</li>
        <li>React testing library</li>
        <li>GIT</li>
        <li>Jira</li>
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

  </aside>)

}
