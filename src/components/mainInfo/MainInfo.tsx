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
      {/*<p>Front-End Developer has portfolio with pet projects <a href={'https://github.com/kalibria'}>( https://github.com/kalibria)</a>. Started with a layout of the simplest pages using HTML and CSS.</p>*/}
      {/*<p>Step by step dived into front-end development and in their subsequent projects used <b>JavaScript, TypeScript, React, Redux, Redux Toolkit, CSS Grid,Css Flex, SASS, API requests.</b> Met <b>regular expressions, environment variables, local storage, BEM methodology, adaptive layout, Webpack, ES Modules, Bootstrap, Tailwind, Formik </b>and its. </p>*/}
      {/*<p>One of my latest projects is <b>Honda Tracker - booking app</b> <a href={'https://github.com/ilya-labs/Honda_tracker'}>(https://github.com/ilya-labs/Honda_tracker)</a>. Working on it  I used  <b>Jira, Git</b>, opened PRs, my mentor reviewed code.</p>*/}
      {/*<p>This app write in  React, Typescript, CSS: <b>Tailwind</b>, Forms: <b>Formik, Intl.DateTimeFormat, RTK query, Postman client</b> for backend requests.</p>*/}

      {/* <p>Link to my GitHub <a href={'https://github.com/kalibria'}> https://github.com/kalibria.</a></p>*/}

      {/*<p>For now I am working on my personal web-site. It will be adaptive and I will use TypeScript, JavaScript, React, Redux, <b>Next.js.</b></p>*/}
        <p>Created so projects as <a href={'https://github.com/ikushlianski/Honda_tracker'}>Honda_tracker</a>, <a href={'https://github.com/kalibria/Meal-tracker'}>Meal_tracker</a>, <a href={'https://github.com/kalibria/Crazy-race'}>Crazy-race</a> and ets.</p>
        <p>I create responsive applications using React, Redux, Redux Toolkit, JavaScript, TypeScript. Worked on login form, forms (Formik), sent requests using RTK query, Postman, familiar with DynamoDB. </p>
        <p>Worked with time, converted it to necessary format, using the Date-fns library and the mapper pattern.</p>
        <p>Some components in my projects were created using Material-UI library, Bootstrap library, Ant Design library. Use CSS Flexbox, CSS Grid to design web pages.</p>
        <p>Break the code into modules, use mappers.</p>
        <p>Familiar with Jest, React Testing library. Some functions have been tested using this libraries.</p>
        <p>Working on my pet projects use Jira, Github, create branches, open PRs. My mentor reviews it.</p>
        <p>All my projects is <a href={'https://github.com/kalibria'}>kalibria.</a></p>
        <p>For now I am working on my personal web-site. It will be adaptive and I will use TypeScript, JavaScript, React, Redux, Next.js.</p>
      </div>
    </article>
    <article>
      <h3 className={styles.subtitle}>EDUCATION</h3>
      <hr/>
      <ul className={styles.list} >
        <li>
          since 2022 - present Work with mentor
        </li>
        <li>
          since 2020 - present Independent study
        </li>
        <li>
         2019 HTML academy course
        </li>
        <li>
          since 2009 - 2014 Belarusian State University of Economics
        </li>
      </ul>
    </article>
  </main>
  </>
}
