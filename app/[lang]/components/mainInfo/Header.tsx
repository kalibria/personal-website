import styles from "@/app/[lang]/components/mainInfo/mainInfo.module.css";

type Props = {
    name: string
    role: string
}

export const Header = ({name, role}: Props) =>{
    return (
        <header>
            <p className={styles.headerName}>{name}</p>
            <h1 className={styles.headerSubtitle}>{role}</h1>
            <hr/>
        </header>
    )
}