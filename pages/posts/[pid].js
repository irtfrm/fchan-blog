import { fetchPosts, fetchPostByPid } from '@utils/contentfulPosts'

export default function Post({ postData }) {
  return (
    <div>
      {postData.fields.title}
      <br />
      {postData.fields.pid}
      <br />
      {postData.fields.date}
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetchPosts()
  const paths = posts.map(post => `/posts/${post.fields.pid}`)
  console.log("Generate paths: ",paths);
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await fetchPostByPid(params.pid)
  return {
    props: {
      postData
    }
  }
}

// const Post = () => {
//   const router = useRouter()
//   const { pid } = router.query

//   return <p>Post: {getPostByPid(pid)}</p>
// }

//export default Post