import Link from 'next/link'
import Folder from './icons/Folder'
import { PostContent } from './PostContent';
import styles from './post.module.css'

function PostDetail({ pid, date, category, title, content }) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
      <Link href={"/posts/"+pid}><h2 className={styles.title}>{title}</h2></Link>
      <div className={styles.info}>
          <span>
            {date.substring(0, 10)}
          </span>
          <span className={styles.center_dot}>&middot;</span>
          <span> 
            <Folder/>
            {category}
          </span>
        </div>
        <PostContent content={content}/>
      </div>
    </div>
  )
}

export default PostDetail
