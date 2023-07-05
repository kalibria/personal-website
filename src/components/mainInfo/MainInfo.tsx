import styles from './mainInfo.module.css'

export default function MainInfo(){
  return <>
  <main className={styles.mainContainer}>
    <header>
      <h1 className={styles.textHeaders}>MARIA KUSHLIANSKAYA</h1>
      <p className={styles.text}>FRONT-END DEVELOPER</p>
    </header>
    <article>
      <hr/>
      <div className={styles.textContainer}>
        <p>I am Maria, an ambitious and highly motivated developer willing to jumpstart my career in an exciting world of web technologies.</p>
        <p>During the 2 years of my studies, I dedicated myself to learning JavaScript and React, and also battle-tested these skills by doing personal projects. I am particularly proud of Family Car Booking App, where I successfully implemented quite complex functionalities using CSS, Typescript, React and Redux. After doing multiple pet projects (you can see them all here <a href={'https://github.com/kalibria'}>github.com/kalibria</a>) over a couple of years, I am pretty sure I am ready to start developing web apps professionally.</p>
        {/*<p><b>My skills:</b>*/}
        {/*  <ul className={styles.list}>*/}
        {/*    <li><b>Languages:</b> Javascript,Typescript</li>*/}
        {/*    <li><b>React ecosystem:</b> React, Redux, Redux Toolkit, RTK Query, Formik and other React libs</li>*/}
        {/*    <li><b>Styling:</b> CSS3, SCSS, Material UI, Bootstrap, a bit of Ant Design. Use CSS Flexbox and some CSS Grid to design web pages. Practice responsive design</li>*/}
        {/*    <li><b>Other:</b> Know how to use Postman for backend requests, utilize Jest and React Testing Library in pet projects. Use Git CLI and know how to work with Github</li>*/}
        {/*    </ul>*/}
        {/*</p>*/}

          <ul className={styles.list}>
            <b>Why me:</b>
            <li>break code into modules</li>
            <li>understand the principles of component design</li>
            <li>use mappers to decouple frontend data from backend specifics</li>
            <li>always think about application structure and how my changes will affect it</li>
            <li>work on my pet projects using Jira, decomposing tasks and creating PRs to be reviewed by the mentor</li>
            <li>learn technologies by reading documentation as it is the best source of information</li>
          </ul>

        <p>For now I am working on my personal website. It will be responsive and I am planning to use TypeScript, React, Redux and Next.js.</p>
        <p>There’s still a lot to learn of course! As for technologies, my plans include new CSS stuff like container queries and layers, as well as Storybook, Redux Saga, Styled Components, GraphQL, PWAs and more. I will continue working to increase my English language level. Long term, I am also interested in people and resource management.
        </p>
        <p>I am eager to work alongside experienced developers who can mentor and guide me towards becoming a proficient frontend developer.</p>
        <p>In my opinion, modern web technologies, together with AI, is what are pushing many successful businesses forward, and I want to be part of this process. </p>

      </div>
    </article>
    {/*<article>*/}
    {/*  <h3 className={styles.subtitle}>EDUCATION</h3>*/}
    {/*  <hr/>*/}
    {/*  <ul className={styles.list} >*/}
    {/*    <li>*/}
    {/*      since 2020: pet projects, documentation and theory studies, IT-centric English practice, work with mentor*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*      2009-2014: Belarusian State University of Economics*/}
    {/*    </li>*/}

    {/*  </ul>*/}
    {/*</article>*/}
  </main>
  </>
}
