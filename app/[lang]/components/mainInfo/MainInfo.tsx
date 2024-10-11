import {IMainInfo} from '@/dictionaries/interfaces';
import styles from './mainInfo.module.css'
import {Contacts} from "@/app/[lang]/components/asideBar/Contacts";

export default function MainInfo({mainInfo}: IMainInfo) {

    return <>
        <main className={styles.mainContainer}>
            <header>
                <p className={styles.headerName}>{mainInfo.aboutMaria.name}</p>
                <h1 className={styles.headerSubtitle}>{mainInfo.aboutMaria.role}</h1>
                <hr/>
            </header>
            <article>
                <div className={styles.textContainer}>
                    <p>{mainInfo.aboutMaria.introduction} <b>TypeScript, React, Redux (RTK), Next.js, CSS.</b></p>
                    <p>{mainInfo.aboutMaria.aboutProjects1} <a
                        href="https://kalibria.github.io/Crazy-race" target={'_blank'}>Crazy
                        race</a>{mainInfo.aboutMaria.aboutProjects2} <a
                        href={"https://github.com/kalibria/Family-car-booking-app/blob/main/README.md"}
                        target={'_blank'}>Family Car Booking App</a>, <a
                        href={"https://github.com/kalibria/Todolist_for_portfolio"} target={'_blank'}>Task Manager.</a>
                    </p>
                    <ul>
                        <b>{mainInfo.highlightedWords.mySkills}</b>
                        <li><b>{mainInfo.highlightedWords.languages}</b> {mainInfo.skills.languages}</li>
                        <li><b>{mainInfo.highlightedWords.reactEcosystem}</b> {mainInfo.skills.reactEcosystem}</li>
                        <li><b>{mainInfo.highlightedWords.styling}</b> {mainInfo.skills.styling}</li>
                        <li><b>{mainInfo.highlightedWords.other}</b> {mainInfo.skills.other}</li>
                    </ul>

                    <ul className={styles.list}>
                        <b>{mainInfo.highlightedWords.whyMe}</b>
                        <li>{mainInfo.whyMe.modularCode}</li>
                        <li>{mainInfo.whyMe.componentDesign}</li>
                        <li>{mainInfo.whyMe.mappers}</li>
                        <li>{mainInfo.whyMe.structure}</li>
                        <li>{mainInfo.whyMe.workflow}</li>
                        <li>{mainInfo.whyMe.learnTech}</li>
                    </ul>

                    {/*<p className={styles.nonPrintable}>{mainInfo.currentProject}.</p>*/}
                    {/*<p className={styles.nonPrintable}>{mainInfo.futurePlans}*/}
                    {/*</p>*/}
                    {/*<p className={styles.nonPrintable}>{mainInfo.eagerToWork}</p>*/}
                    {/*<p className={styles.nonPrintable}>{mainInfo.contribution} </p>*/}

                </div>
            </article>
        </main>
    </>
}
