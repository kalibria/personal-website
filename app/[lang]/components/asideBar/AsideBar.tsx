import {IAsideBar} from '@/dictionaries/interfaces';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from "next/legacy/image";
import styles from './asideBar.module.css'
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import linkedIn from '../imgs/linkedin.svg';
import gitHub from '/public/github.svg'

function AsideBar ({asideBar}:IAsideBar) {
  return (<aside className={styles.asideBarContainer}>
    <div className={styles.photoAndContactsContainer}>
    <div className={styles.myPhotoContainer} />
      <header className={styles.asideBarHeader}>
        <h1>{asideBar.name}</h1>
        <p className={styles.mobileText}>{asideBar.role}</p>
        <hr/>
      </header>
    </div>
    <ul className={styles.contactsList}>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faPhone} className={styles.listIcon} width={14} height={14}/>+375292923404</li>
      <li className={styles.contactListItem} ><FontAwesomeIcon icon={faEnvelope} className={styles.listIcon} width={14} height={14}/><p>mariakazakova92@gmail.com</p></li>
      <li className={styles.contactListItem}><FontAwesomeIcon icon={faHouse} className={styles.listIcon} width={14} height={14}/>
        {asideBar.country}</li>
      <li className={styles.contactListItem}><div className={styles.listIcon}><Image src={gitHub} alt={'gitHub'}  width={15} height={15} /></div><a href={'https://github.com/kalibria'} target={'_blank'}>kalibria</a></li>
      <li className={styles.contactListItem}><div className={`${styles.listIcon} + ${styles.linkedin}`}>
        <Image
          src={linkedIn}  width={15} height={15} alt={'Linkedin'}/></div>
        <a href={'https://www.linkedin.com/in/maria-kushlianskaya-228b3889/'} target={'_blank'}>mariya-kushlianskaya</a></li>

    </ul>

    <div>
      <h3 className={styles.subtitle}>{asideBar.highlightedWords.skills}</h3>
      <hr/>
      <ul className={styles.list}>
        <li>Javascript, Typescript</li>
        <li>React, Redux</li>
        <li>HTML5/CSS3</li>
        {/*<li>Jest</li>*/}
        <li>Git</li>
      </ul>
    </div>

    <div>
      <h3 className={styles.subtitle}>{asideBar.highlightedWords.languages}</h3>
      <hr/>
      <ul className={styles.list}>
        <li>{asideBar.languages.russian}</li>
        <li>{asideBar.languages.english}</li>
      </ul>
    </div>

    <div>
      <h3 className={styles.subtitle}>{asideBar.highlightedWords.education}</h3>
      <hr/>
      <ul className={styles.list} >
        <li>
          <b>{asideBar.education.petProjectPeriod}</b> {asideBar.education.petProjects}
        </li>
        <li>
          <b>{asideBar.education.universityPeriod}</b> {asideBar.education.university}
        </li>
      </ul>
    </div>

  </aside>)

}

export default AsideBar;
