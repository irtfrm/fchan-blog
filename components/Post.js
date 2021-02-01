import Link from 'next/link'
import Folder from './icons/Folder'

function Post({ pid, date, category, body, title }) {
  return (
    <Link href={"/posts/"+pid}>
    <div className="post">
      <div className="text">
        <h2>{title}</h2>
        <p>{body.content[0].content[0].value}</p>
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
        
      </div>

      <style jsx>{`
        .post {
          position: relative;
          margin: 10px;
          width: 500px;
          height: 20vh;
          cursor: pointer;
          background: #323242;
          border-radius: 2px;
        }
        .text {
          position: absolute;
          padding: 10px;
          box-sizing: border-box;
          width: 100%;
          height: 80px;
        }
        h2,
        .info,
        p {
          margin: 5px;
        }
        h2 {
          margin-bottom: 0;
        }
        .info {
          margin-top: 0;
          font-size: 0.8em;
          color: #9aa6bb;
        }
        .center-dot {
          text-align: center;
          margin: 0 1em;
        }
      `}</style>
    </div>
    </Link>
  )
}

export default Post
