import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './asideBar.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';

export default function AsideBar () {
  return (<aside className={styles.asideBarContainer}>
    <div className={styles.myPhotoContainer}/>

    <ul className={styles.list}>
      <li className={styles.listItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} />phone number</li>
      <li className={styles.listItem}><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon}/>email</li>
      <li className={styles.listItem}><FontAwesomeIcon icon={faGlobe} className={styles.listIcon}/>website</li>
      <li className={styles.listItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon}/>address</li>
    </ul>

    <div>
      <h3>SKILLS</h3>
      <hr/>
      <ul>
        <li>Bookkeeping</li>
        <li>Tax Filling</li>
        <li>Data Entry</li>
        <li>Data Analysis</li>
        <li>Public Accounting</li>
        <li>Business Assessment</li>
      </ul>
    </div>

    <div>
      <h3>LANGUAGES</h3>
      <hr/>
      <ul>
        <li>English</li>
        <li>Russian</li>
        <li>Poland</li>
      </ul>
    </div>

  </aside>)

}
