import Link from 'next/link'
import Folder from './icons/Folder'
import { PostContent } from './PostContent';
import styles from './post.module.css'
import {getReadingTimeFromMarkdown} from '@utils/post'
import HourGlass from './icons/HourGlass';
import Calendar from './icons/Calendar';
import Hateb from './icons/Hateb';
import Twitter from './icons/Twitter';

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
        <div className={styles.share_links}>
          <span className={styles.share_link}>シェアする</span>
          <a className={styles.share_link} target="_blank" href={"https://twitter.com/share?url=https://fchan.dev/posts/"+pid+"&text=fchan.dev%20-%20"+title} data-show-count="false"><Twitter/></a>
          <a className={styles.share_link} target="_blank" href={"https://b.hatena.ne.jp/entry/s/fchan.dev/posts/"+pid} ><Hateb/></a>
        </div>
      </div>
    </div>
  )
}

export default PostDetail
