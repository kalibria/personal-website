import styles from "@/app/[lang]/components/asideBar/asideBar.module.css";
import {AsideBarEducation} from "@/dictionaries/interfaces";

type Props = {
    educationScope:AsideBarEducation,
    education: string
}

export const Education = ({educationScope, education }: Props) =>{
    return (
        <div>
            <h3 className={styles.subtitle}>{education}</h3>
            <hr/>
            <ul className={styles.list}>
                <li>
                    <b>{educationScope.petProjectPeriod}</b> {educationScope.petProjects}
                </li>
                <li>
                    <b>{educationScope.petProjectPeriod1}</b> {educationScope.petProjects1}
                </li>


                <li>
                    <b>{educationScope.universityPeriod}</b> {educationScope.university}
                </li>
            </ul>
        </div>
    )
}