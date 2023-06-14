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
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon}/>email</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon}/>website</li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon}/>address</li>
    </ul>

    <div>
      <h3>SKILLS</h3>
      <hr/>
      <ul className={styles.list}>
        <li className={styles.listItem}>Bookkeeping</li>
        <li className={styles.listItem}>Tax Filling</li>
        <li className={styles.listItem}>Data Entry</li>
        <li className={styles.listItem}>Data Analysis</li>
        <li className={styles.listItem}>Public Accounting</li>
        <li className={styles.listItem}>Business Assessment</li>
      </ul>
    </div>

    <div>
      <h3>LANGUAGES</h3>
      <hr/>
      <ul className={styles.list}>
        <li className={styles.listItem}>English</li>
        <li className={styles.listItem}>Russian</li>
        <li className={styles.listItem}>Poland</li>
      </ul>
    </div>

  </aside>)

}
