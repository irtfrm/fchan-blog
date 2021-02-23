import styles from './footer.module.css'
import GitHub from './icons/GitHub'
import LinkedIn from './icons/LinkedIn'
import Mail from './icons/Mail'

export default function Footer() {
  return (
      <footer className={styles.footer}>
      <div>Contact Me</div>
        <div className={styles.icon_container}>
          <a target="_blank" className={styles.icon} href="mailto:frm.tomoya@gmail.com"><Mail/> </a>
          <a target="_blank" className={styles.icon} href="https://github.com/irtfrm"><GitHub/> </a>
          <a target="_blank" className={styles.icon} href="https://www.linkedin.com/in/tomoya-furukawa-0ba37a203/"><LinkedIn/> </a>
        </div>
        <div>
        ©{new Date().getFullYear()} Tomoya Furukawa
        </div>
      </footer>
  )
}
