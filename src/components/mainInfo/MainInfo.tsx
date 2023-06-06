import styles from './mainInfo.module.css'

export default function MainInfo(){
  return <>
  <main>
    <header>
      <h1 className={styles.textHeaders}>Maria Kushlianskaya</h1>
      <p className={styles.text}>Junior frontend developer</p>
    </header>
    <article>
      <h3>
        PROFESSIONAL EXPERIENCE
      </h3>
      <hr/>
      <p>Lorem ipsum</p>
    </article>
    <article>
      <h3>
        WORK EXPERIENCE
      </h3>
      <hr/>
      <h4>Lorem Ipsum</h4>
      <p>Lorem ipsum</p>
      <h4>Lorem Ipsum</h4>
      <p>Lorem ipsum</p>
      <h4>Lorem Ipsum</h4>
      <p>Lorem ipsum</p>
      <h4>Lorem Ipsum</h4>
      <p>Lorem ipsum</p>
    </article>
    <article>
      <h3>EDUCATION</h3>
      <hr/>
      <p4>Lorem ipsum</p4>
    </article>
  </main>
  </>
}
