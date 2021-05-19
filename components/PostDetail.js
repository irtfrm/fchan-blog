import Link from 'next/link'
import Folder from './icons/Folder'
import { PostContent } from './PostContent';
import styles from './post.module.css'
import {getReadingTimeFromMarkdown} from '@utils/post'
import HourGlass from './icons/HourGlass';
import Calendar from './icons/Calendar';
import ShareButtons from './ShareButtons';
import PostInfo from './PostInfo';


function PostDetail({ pid, date, category, title, content }) {
  return (
    <div className={styles.post}>
      <div className={styles.text}>
        <Link href={"/posts/"+pid}><h2 className={styles.title}>{title}</h2></Link>
        <PostInfo date={date} category={category} expected_reading_minutes={getReadingTimeFromMarkdown(content)}/>
        <PostContent content={content}/>
        <ShareButtons pid={pid} title={title}/>
      </div>
    </div>
  )
}

export default PostDetail
