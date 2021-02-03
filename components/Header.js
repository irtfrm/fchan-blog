import styles from './header.module.css'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'
import Mail from './icons/Mail'

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>fchan.dev</h1>
      <div className={styles.iconContainer}>
        <a className={styles.icon} href="mailto:frm.tomoya@gmail.com"><Mail/> Mail</a>
        <a className={styles.icon} href="https://github.com/irtfrm"><GitHub/> GitHub</a>
        <a className={styles.icon} href="https://www.linkedin.com/in/tomoya-furukawa-0ba37a203/"><LinkedIn/> LinkedIn</a>
      </div>
    </>
  )
}
