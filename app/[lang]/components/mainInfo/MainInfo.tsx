import styles from './mainInfo.module.css'

export default function MainInfo(){

  return <>
    <main className={styles.mainContainer}>
      <header>
        <h1>MARIA KUSHLIANSKAYA</h1>
        <p className={styles.text}>FRONT-END DEVELOPER</p>
        <hr/>
      </header>
      <article>

        <div className={styles.textContainer}>
          <p>I am Maria, an ambitious and highly motivated developer willing to jumpstart my career in an exciting world of web technologies.</p>
          <p>During the 2 years of my studies, I dedicated myself to learning JavaScript and React, and also battle-tested these skills by doing personal projects. I am particularly proud of <a
            href="https://github.com/kalibria/Family-car-booking-app#readme" target={'_blank'}>Family Car Booking App</a>, where I successfully implemented quite complex functionalities using Typescript, React and Redux, CSS. </p>
          <p className={styles.nonPrintable}>After doing multiple pet projects (you can see them all here <a href={'https://github.com/kalibria'}>github.com/kalibria</a>) over a couple of years, I am pretty sure I am ready to start developing web apps professionally.</p>

          <ul>
            <b>My skills:</b>
            <li><b>Languages:</b> Javascript, Typescript</li>
            <li><b>React ecosystem:</b> React, Redux, Redux Toolkit, RTK Query, Formik and other React libs</li>
            <li><b>Styling:</b> CSS3, SCSS, Material UI, Bootstrap, a bit of Ant Design. Use CSS Flexbox and some CSS Grid to design web pages. Practice responsive design</li>
            <li><b>Other:</b> Know how to use Postman for backend requests, utilize Jest and React Testing Library in pet projects. Use Git CLI and know how to work with Github</li>
          </ul>

          <ul className={styles.list}>
            <b>Why me:</b>
            <li>Write modular code with low coupling</li>
            <li>Understand the principles of component design</li>
            <li>Use mappers to decouple frontend data from backend specifics</li>
            <li>Always think about application structure and how my changes will affect it</li>
            <li>Work on my pet projects using Jira, decomposing tasks and creating PRs to be reviewed by the mentor</li>
            <li>Learn technologies by reading documentation in English as it is the best source of information</li>
          </ul>

          <p className={styles.nonPrintable}>For now I am working on my personal website. It will be responsive and I am planning to use TypeScript, React, Redux and Next.js.</p>
          <p className={styles.nonPrintable}>There’s still a lot to learn of course! As for technologies, my plans include new CSS stuff like container queries and layers, as well as Storybook, Redux Saga, Styled Components, GraphQL, PWAs and more. I will continue working to increase my English language level. Long term, I am also interested in people and resource management.
          </p>
          <p className={styles.nonPrintable}>I am eager to work alongside experienced developers who can mentor and guide me towards becoming a proficient frontend developer.</p>
          <p>In my opinion, modern web technologies, together with AI, is what pushes successful businesses forward, and I want to help companies drive this effort. </p>

        </div>
      </article>
    </main>
  </>
}
