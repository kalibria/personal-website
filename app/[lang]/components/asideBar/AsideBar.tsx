import {IAsideBar} from '@/dictionaries/interfaces';
import styles from './asideBar.module.css'
import {Contacts} from "@/app/[lang]/components/asideBar/Contacts";
import {Skills} from "@/app/[lang]/components/asideBar/Skills";
import {Languages} from "@/app/[lang]/components/asideBar/Languages";
import {Education} from "@/app/[lang]/components/asideBar/Education";

function AsideBar({asideBar}: IAsideBar) {
    return (<aside className={styles.asideBarContainer}>
        <div className={styles.photoAndContactsContainer}>
            <div className={styles.myPhotoContainer}/>
            <header className={styles.asideBarHeader}>
                <h1>{asideBar.name}</h1>
                <p className={styles.mobileText}>{asideBar.role}</p>
                <hr/>
            </header>
        </div>
        <Contacts country={asideBar.country}/>
        <Skills skills={asideBar.highlightedWords.skills}/>
        <Languages languages={asideBar.highlightedWords.languages} russian={asideBar.languages.russian} english={asideBar.languages.english}/>
        <Education education={asideBar.highlightedWords.education} educationScope={asideBar.education}/>
    </aside>)

}

export default AsideBar;
