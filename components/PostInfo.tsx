import styles from './post.module.css';
import Folder from './icons/Folder';
import HourGlass from './icons/HourGlass';
import Calendar from './icons/Calendar';

function PostInfo({ date, category, expected_reading_minutes }) {
    return (
        <div className={styles.info}>
          <div className={styles.info_element}>
            <Calendar/>
            {date.substring(0, 10)}
          </div>
          <div className={styles.info_element}> 
            <Folder/>
            {category}
          </div>
          <div className={styles.info_element}>
            <HourGlass/>
            {expected_reading_minutes + "分"}
          </div>
        </div>
    );
}

export default PostInfo;