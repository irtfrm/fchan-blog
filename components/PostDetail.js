import Link from 'next/link'
import Folder from './icons/Folder'
import { PostContent } from './PostContent';
import styles from './post.module.css'
import {getReadingTimeFromMarkdown} from '@utils/post'
import HourGlass from './icons/HourGlass';
import Calendar from './icons/Calendar';
import ShareButtons from './ShareButtons';

function PostDetail({ pid, date, category, title, content }) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
      <Link href={"/posts/"+pid}><h2 className={styles.title}>{title}</h2></Link>
      <div className={styles.info}>
          <span>
            <Calendar/>
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
        <PostContent content={content}/>
        <ShareButtons pid={pid} title={title}/>
      </div>
    </div>
  )
}

export default PostDetail
