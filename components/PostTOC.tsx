import styles from './posttoc.module.css'

function parse_h1(markdown) {
    let headlines = [];
    let is_code_mode = false;
    for(const row of markdown.split("\n")){
        if(row.match(/```/))
            is_code_mode = !is_code_mode;
        else if(!is_code_mode && row.trim().slice(0, 2)==="# ")
            headlines.push(row.slice(2).trim());
    }
    return headlines;
}

export const PostTOC = ({ content }) => {
    const headlines = parse_h1(content);
    return (
        <ul className={styles.toc_ul}>
            {headlines.map((h) => {
                return <li className={styles.toc_li}><a className={styles.toc_a} href={"#"+h}>{h}</a></li>
            })}
        </ul>
    )
}