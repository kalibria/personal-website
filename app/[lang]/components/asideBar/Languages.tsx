import styles from "@/app/[lang]/components/asideBar/asideBar.module.css";

type Props = {
    languages: string
    russian: string,
    english: string
}

export const Languages = ({languages, english, russian}: Props) => {
    return (
        <div>
            <h3 className={styles.subtitle}>{languages}</h3>
            <hr/>
            <ul className={styles.list}>
                <li>{russian}</li>
                <li>{english}</li>
            </ul>
        </div>
    )
}