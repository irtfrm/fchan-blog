import styles from './footer.module.css'

export default function Footer() {
  return (
      <footer className={styles.footer}>
        ©{new Date().getFullYear()} Tomoya Furukawa
      </footer>
  )
}
