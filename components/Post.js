import Link from 'next/link'
import Folder from './icons/Folder'
import { PostDescription } from './PostDescription'
import styles from './post.module.css'
import {getReadingTimeFromMarkdown} from '@utils/post'
import HourGlass from './icons/HourGlass';

function Post({ pid, date, category, content, title }) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
      <Link href={"/posts/"+pid}><h2 className={styles.title}>{title}</h2></Link>
        <p className={styles.description}><PostDescription content={content}/></p>
        <div className={styles.info}>
          <span>
            <Calender/>
            {date.substring(0, 10)}
          </span>
          <span className={styles.center_dot}>&middot;</span>
          <span> 
            <Folder/>
            {category}
          </span>
          <span className={styles.center_dot}>&middot;</span>
          <span>
            <HourGlass/>
            {getReadingTimeFromMarkdown(content) + "分"}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Post
