import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './asideBar.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';


export default function AsideBar () {
  return (<aside className={styles.asideBarContainer}>
    <div className={styles.myPhotoContainer}/>

    <ul className={styles.contactsList}>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} />phone number</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon}/>mariakazakova92@gmail.com</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon}/>website</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon}/>address</li>
    </ul>

    <div>
      <h3 className={styles.subtitle}>SKILLS</h3>
      <hr/>
      <h4 className={styles.subtitle2}>Languages</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>HTML</li>
        <li className={styles.listItem}>CSS</li>
        <li className={styles.listItem}>Javascript</li>
        <li className={styles.listItem}>TypeScript</li>

      </ul>

      <h4 className={styles.subtitle2}>Libraries</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>React</li>
        <li className={styles.listItem}>Redux</li>
      </ul>

      <h4 className={styles.subtitle2}>Testing</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>Jest</li>
        <li className={styles.listItem}>React testing library</li>
      </ul>

      <h4 className={styles.subtitle2}>CI/CD</h4>
      <ul className={styles.list}>
        <li className={styles.listItem}>GIT</li>
      </ul>
    </div>

    <div>
      <h3 className={styles.subtitle}>LANGUAGES</h3>
      <hr/>
      <ul className={styles.list}>
        <li className={styles.listItem}>Russian - native</li>
        <li className={styles.listItem}>English - intermediate</li>
        <li className={styles.listItem}>Poland - elementary</li>
      </ul>
    </div>

  </aside>)

}
