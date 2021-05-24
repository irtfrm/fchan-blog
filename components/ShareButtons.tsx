import Hateb from './icons/Hateb';
import Twitter from './icons/Twitter';
import styles from './share-buttons.module.css'

export default function ShareButtons({pid, title}) {
    return (
        <div className={styles.share_links}>
            <span className={styles.share_link}>シェアする</span>
            <a className={styles.share_link} target="_blank" href={"https://twitter.com/share?url=https://fchan.dev/posts/"+pid+"&text=fchan.dev%20-%20"+title} data-show-count="false"><Twitter/></a>
            <a className={styles.share_link} target="_blank" href={"https://b.hatena.ne.jp/entry/s/fchan.dev/posts/"+pid} ><Hateb/></a>
        </div>
    );
}