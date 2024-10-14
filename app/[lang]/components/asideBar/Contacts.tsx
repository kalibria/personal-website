import styles from "@/app/[lang]/components/asideBar/asideBar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHouse, faPhone} from "@fortawesome/free-solid-svg-icons";
import Image from "next/legacy/image";
import linkedIn from "@/app/[lang]/components/imgs/linkedin.svg";
import gitHub from "/public/github.svg";
import TelegramIcon from '@mui/icons-material/Telegram';

type Props = {
    country: string
}

export const Contacts = ({country}: Props) => {
    return (
        <ul className={styles.contactsList}>
            <li className={styles.contactListItem}>
                <FontAwesomeIcon icon={faPhone} className={styles.listIcon} width={14} height={14}/>+375292923404
            </li>
            <li className={styles.contactListItem}>
                <TelegramIcon fontSize={'small'} style={{transform: 'translateX(-3px)'}}/>
                <p style={{paddingLeft: "3px"}}>@mariya_kalib</p>
            </li>

            <li className={styles.contactListItem}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.listIcon} width={14} height={14}/>
                <p>mariakazakova92@gmail.com</p>
            </li>

            <li className={styles.contactListItem}>
                <FontAwesomeIcon icon={faHouse} className={styles.listIcon} width={14} height={14}/>
                {country}
            </li>

            <li className={styles.contactListItem}>
                <div className={styles.listIcon}>
                    <Image src={gitHub} alt={'gitHub'} width={15} height={15}/>
                </div>
                <a href={'https://github.com/kalibria'} target={'_blank'}>kalibria</a>
            </li>

            <li className={styles.contactListItem}>
                <div className={`${styles.listIcon} + ${styles.linkedin}`}>
                    <Image
                        src={linkedIn} width={15} height={15} alt={'Linkedin'}/>
                </div>
                <a href={'https://www.linkedin.com/in/maria-kushlianskaya-228b3889/'}
                   target={'_blank'}>mariya-kushlianskaya</a>
            </li>

            <li className={styles.contactListItem}>
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512" width={15} height={15}>
                    <path
                        d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/>
                </svg>
                <div className={styles.personalWebsite}>
                    <a href={"https://kalibria.github.io/portfolio-start-project"} target={'_blank'}>personal
                        website</a>
                </div>
            </li>
        </ul>
    )
}