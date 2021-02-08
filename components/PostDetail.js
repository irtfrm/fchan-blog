import Link from 'next/link'
import Folder from './icons/Folder'

function parseBody(body) {
  if (body.nodeType==='text'){
    if (body.marks===[]){
      return body.value;
    }
    let class_names = [];
    for (const mark in body.marks) {
      if (Object.hasOwnProperty.call(body.marks, mark)) {
        const element = body.marks[mark].type;
        class_names.push(element);
      }
    }
    const class_str = class_names.join(" ");
    return (
      <>
        <span className={class_str}>{body.value}</span>
        <style jsx>{`
        .code {
          background: #232324;
          border: 1px solid #37393a;
          border-radius: 2px;
          color: #d49d54;
          margin: 0 0.4em;
          padding: 0 0.2em;
          font-family: Monaco, Consolas, 'Courier New', 'Meiryo', 'Osaka-Mono', monospace;
          font-size: 80%;
        }
        .bold {
          font-weight: bold;
        }
        .italic {
          font-style: italic;
        }
        .underline {
          text-decoration: underline;
        }
        `}</style>
      </>
      );
  }

  let res = [];
  for (const child in body.content) {
    if (Object.hasOwnProperty.call(body.content, child)) {
      const element = body.content[child];
      res.push(parseBody(element));
    }
  }
  if (body.nodeType==='paragraph') {
    return (<><p>{res}</p><style>{`p {margin: 0.5em 5px;}`}</style></>);
  } else if (body.nodeType==='hyperlink') {
    return (<><a href={body.data.uri}>{res}</a><style>{`a {color: #72c1e0; text-decoration:none; font-weight:bold;} a:hover {text-decoration:underline}`}</style></>);
  } else if (body.nodeType.slice(0,7)==='heading') {
    return (<><p className={body.nodeType}>{res}</p><style>{`.heading-1, .heading-2, .heading-3, .heading-4{line-height: 1.25;font-weight: bold;} .heading-1 {margin: 0.9em 5px 0em; font-size: 180%;} .heading-2 {margin: 0.75em 5px 0em; font-size: 155%;} .heading-3 {margin: 0.5em 5px 0em; font-size: 134%;}.heading-4 {margin: 0.5em 5px 0em; font-size: 115%;}`}</style></>);
  } else if (body.nodeType==='list-item') {
    return (<li>{res}</li>);
  } else if (body.nodeType==='unordered-list') {
    return (<><ul>{res}</ul></>);
  } else if (body.nodeType==='ordered-list') {
    return (<><ol>{res}</ol></>);
  } else if (body.nodeType==='blockquote') {
    return (<><blockquote>{res}</blockquote><style>{`blockquote{border-left: 7px #535963 solid;color: #b3c4ca;margin:.8em 6px;padding:0 .75em;}`}</style></>);
  } else if (body.nodeType==='document') {
    return (<div>{res}</div>);
  }
  console.log("Unknown Node Type ",body)
  return res;
}
function PostDetail({ pid, date, category, body, title }) {
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
        {parseBody(body)}
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
