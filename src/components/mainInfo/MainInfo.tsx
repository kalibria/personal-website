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
