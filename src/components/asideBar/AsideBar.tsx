import styles from './asideBar.module.css'

export default function AsideBar () {
  return <aside className={styles.asideBarContainer}>
    <div className={styles.myPhotoContainer}/>

    <ul>
      <li>phone number</li>
      <li>email</li>
      <li>website</li>
      <li>address</li>
    </ul>

    <div>
      <h3>SKILLS</h3>
      <hr/>
      <ul>
        <li>Bookkeeping</li>
        <li>Tax Filling</li>
        <li>Data Entry</li>
        <li>Data Analysis</li>
        <li>Public Accounting</li>
        <li>Business Assessment</li>
      </ul>
    </div>

    <div>
      <h3>LANGUAGES</h3>
      <hr/>
      <ul>
        <li>English</li>
        <li>Russian</li>
        <li>Poland</li>
      </ul>
    </div>

  </aside>

}
