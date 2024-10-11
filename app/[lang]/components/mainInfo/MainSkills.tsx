import {HighlightedWords, Skills} from "@/dictionaries/interfaces";

type Props = {
    highlightedWords: HighlightedWords,
    skills: Skills
}
export const MainSkills = ({highlightedWords, skills}: Props) => {
    return (
        <ul>
            <b>{highlightedWords.mySkills}</b>
            <li><b>{highlightedWords.languages}</b> {skills.languages}</li>
            <li><b>{highlightedWords.reactEcosystem}</b> {skills.reactEcosystem}</li>
            <li><b>{highlightedWords.styling}</b> {skills.styling}</li>
            <li><b>{highlightedWords.other}</b> {skills.other}</li>
        </ul>
    )
}