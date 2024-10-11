import styles from "@/app/[lang]/components/mainInfo/mainInfo.module.css";
import {WhyMeType} from "@/dictionaries/interfaces";

type Props = {
    whyMeWord: string,
    whyMe: WhyMeType
}
export const WhyMe = ({whyMeWord, whyMe}: Props) =>{
    return (
        <ul className={styles.list}>
            <b>{whyMeWord}</b>
            <li>{whyMe.modularCode}</li>
            <li>{whyMe.componentDesign}</li>
            <li>{whyMe.mappers}</li>
            <li>{whyMe.structure}</li>
            <li>{whyMe.workflow}</li>
            <li>{whyMe.learnTech}</li>
        </ul>
    )
}