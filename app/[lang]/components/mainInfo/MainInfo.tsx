import {IMainInfo} from '@/dictionaries/interfaces';
import styles from './mainInfo.module.css'
import {Header} from "@/app/[lang]/components/mainInfo/Header";
import {AboutMe} from "@/app/[lang]/components/mainInfo/AboutMe";
import {MainSkills} from "@/app/[lang]/components/mainInfo/MainSkills";
import {WhyMe} from "@/app/[lang]/components/mainInfo/WhyMe";

export default function MainInfo({mainInfo}: IMainInfo) {

    return <>
        <main className={styles.mainContainer}>
            <Header  name={mainInfo.aboutMaria.name} role={mainInfo.aboutMaria.role}/>
            <article>
                <div className={styles.textContainer}>
                    <AboutMe aboutMaria={mainInfo.aboutMaria}/>
                    <MainSkills highlightedWords={mainInfo.highlightedWords} skills={mainInfo.skills}/>
                    <WhyMe whyMeWord={mainInfo.highlightedWords.whyMe} whyMe={mainInfo.whyMe}/>
                </div>
            </article>
        </main>
    </>
}
