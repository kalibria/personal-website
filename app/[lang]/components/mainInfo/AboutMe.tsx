import {AboutMaria} from "@/dictionaries/interfaces";

type Props = {
    aboutMaria: AboutMaria
}

export const AboutMe = ({aboutMaria}: Props) => {
    return (
        <>
            <p>{aboutMaria.introduction} <b>TypeScript, React, Redux (RTK), Next.js, CSS.</b></p>
            <p>{aboutMaria.aboutProjects1} <a
                href="https://kalibria.github.io/Crazy-race" target={'_blank'}>Crazy
                race</a>{aboutMaria.aboutProjects2} <a
                href={"https://github.com/kalibria/Family-car-booking-app/blob/main/README.md"}
                target={'_blank'}>Family Car Booking App</a>, <a
                href={"https://github.com/kalibria/Todolist_for_portfolio"} target={'_blank'}>Task Manager.</a>
            </p>
        </>
    )
}