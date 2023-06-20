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
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} width={16} height={16}/>+375 29 292 34 04</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon} width={16} height={16}/>mariakazakova92@gmail.com</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon} width={16} height={16}/>website</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon} width={16} height={16}/>ул.Руссиянова д.5/2, г.Минск</li>
      <li className={styles.contactListItem}><Image
        src={'/github.svg'} width={18} height={18} alt={'Github'} className={styles.listIcon}/><a href={'https://github.com/kalibria'} target={'_blank'}>https://github.com/kalibria</a></li>
      <li className={styles.contactListItem}><Image
        src={linkedIn} width={18} height={18} alt={'Linkedin'} className={styles.listIcon}/><a href={'https://www.linkedin.com/in/mariya-kushlianskaya-228b3889/'} target={'_blank'}>https://www.linkedin.com/in/mariya-kushlianskaya-228b3889/</a></li>
    </ul>

    <div>
      <h3 className={styles.subtitle}>SKILLS</h3>
      <hr/>
      <h4 className={styles.subtitle2}>Languages</h4>
      <ul className={styles.list}>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>TypeScript</li>

      </ul>

      <h4 className={styles.subtitle2}>Libraries</h4>
      <ul className={styles.list}>
        <li>React</li>
        <li>Redux</li>
      </ul>

      <h4 className={styles.subtitle2}>Testing</h4>
      <ul className={styles.list}>
        <li>Jest</li>
        <li>React testing library</li>
      </ul>

      <h4 className={styles.subtitle2}>CI/CD</h4>
      <ul className={styles.list}>
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
        <li>Poland - elementary</li>
      </ul>
    </div>

  </aside>)

}
