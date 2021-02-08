import Link from 'next/link'
import Folder from './icons/Folder'
import { PostContent } from './PostContent';

function PostDetail({ pid, date, category, title, content }) {
  return (
    <div className="post">
      <div className="text">
      <Link href={"/posts/"+pid}><h2>{title}</h2></Link>
      <div className="info">
          <span>
            {date.substring(0, 10)}
          </span>
          <span className="center-dot">&middot;</span>
          <span> 
            <Folder/>
            {category}
          </span>
        </div>
        <PostContent content={content}/>
      </div>

      <style jsx>{`
        .post {
          position: relative;
          margin: 10px;
          width: 600px;
          border-radius: 2px;
          transition: .2s;
        }
        .text {
          padding: 10px 0 0;
          box-sizing: border-box;
          width: 100%;
        }
        h2,
        .info,
        p {
          margin: 8px 5px;
        }
        h2 {
          margin-bottom: 0;
          cursor: pointer;
          line-height: 1.6;
        }
        h2:hover {
          text-decoration: underline;
        }
        .info {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 0.8em;
          color: #9aafb4;
        }
        .center-dot {
          text-align: center;
          margin: 0 1em;
        }
        @media screen and (max-width: 700px){
          .post {
            width: 95vw;
          }
        }
      `}</style>
    </div>
  )
}

export default PostDetail
