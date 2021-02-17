import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/"><h1 className={styles.title}>fchan.dev</h1></Link>
    </div>
  )
}
