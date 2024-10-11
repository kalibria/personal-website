import styles from "@/app/[lang]/components/asideBar/asideBar.module.css";

type Props = {
    skills: string
}

export const Skills =({skills}: Props) =>{
    return (
        <div>
            <h3 className={styles.subtitle}>{skills}</h3>
            <hr/>
            <ul className={styles.list}>
                <li>Javascript, Typescript</li>
                <li>React, Redux</li>
                <li>Next.js</li>
                <li>HTML5/CSS3</li>
                <li>Styled Components/MUI</li>
                <li>Jest</li>
                <li>Git</li>
            </ul>
        </div>
    )
}