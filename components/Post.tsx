import Link from 'next/link'
import Folder from './icons/Folder'
import { PostDescription } from './PostDescription'
import styles from './post.module.css'
import {getReadingTimeFromMarkdown} from '@utils/post'
import PostInfo from './PostInfo';

function Post({ pid, date, category, content, title }) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
      <Link href={"/posts/"+pid}><h2 className={styles.title}>{title}</h2></Link>
        <p className={styles.description}><PostDescription content={content}/></p>
        <PostInfo date={date} category={category} expected_reading_minutes={getReadingTimeFromMarkdown(content)}/>
      </div>
    </div>
  )
}

export default Post
