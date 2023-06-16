import styles from './mainInfo.module.css'

export default function MainInfo(){
  return <>
  <main className={styles.mainContainer}>
    <header>
      <h1 className={styles.textHeaders}>MARIA KUSHLIANSKAYA</h1>
      <p className={styles.text}>FRONT-END DEVELOPER</p>
    </header>
    <article>
      <h3 className={styles.subtitle}>
        PROFESSIONAL EXPERIENCE
      </h3>
      <hr/>
      <div className={styles.textContainer}>
      <p>Front-End Developer has portfolio with pet projects <a href={'https://github.com/kalibria'}>( https://github.com/kalibria)</a>. Started with a layout of the simplest pages using HTML and CSS.</p>
      <p>Step by step dived into front-end development and in their subsequent projects used <b>JavaScript, TypeScript, React, Redux, Redux Toolkit, CSS Grid,Css Flex, SASS, API requests.</b> Met <b>regular expressions, environment variables, local storage, BEM methodology, adaptive layout, Webpack, ES Modules, Bootstrap, Tailwind, Formik </b>and its. </p>
      <p>One of my latest projects is <b>Honda Tracker - booking app</b> <a href={'https://github.com/ilya-labs/Honda_tracker'}>(https://github.com/ilya-labs/Honda_tracker)</a>. Working on it  I used  <b>Jira, Git</b>, opened PRs, my mentor reviewed code.</p>
      <p>This app write in  React, Typescript, CSS: <b>Tailwind</b>, Forms: <b>Formik, Intl.DateTimeFormat, RTK query, Postman client</b> for backend requests.</p>

       <p>Link to my GitHub <a href={'https://github.com/kalibria'}> https://github.com/kalibria.</a></p>

      <p>For now I am working on my personal web-site. It will be adaptive and I will use TypeScript, JavaScript, React, Redux, <b>Next.js.</b></p>
      </div>
    </article>
    {/*<article>*/}
    {/*  <h3 className={styles.subtitle}>*/}
    {/*    WORK EXPERIENCE*/}
    {/*  </h3>*/}
    {/*  <hr/>*/}
    {/*  <h4>Lorem Ipsum</h4>*/}
    {/*  <p>Lorem ipsum</p>*/}
    {/*  <h4>Lorem Ipsum</h4>*/}
    {/*  <p>Lorem ipsum</p>*/}
    {/*  <h4>Lorem Ipsum</h4>*/}
    {/*  <p>Lorem ipsum</p>*/}
    {/*  <h4>Lorem Ipsum</h4>*/}
    {/*  <p>Lorem ipsum</p>*/}
    {/*</article>*/}
    <article>
      <h3 className={styles.subtitle}>EDUCATION</h3>
      <hr/>
      <ul className={styles.list}>
        <li>
          HTML academy course
        </li>
        <li>
          Independent study of documentation
        </li>
        <li>
          Work with mentor
        </li>
      </ul>
    </article>
  </main>
  </>
}
