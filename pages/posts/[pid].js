import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ShareButtons from '@components/ShareButtons'
import PostDetail from '@components/PostDetail'
import { fetchPosts, fetchPostById } from '@utils/contentfulPosts'

export default function PostPage({ post }) {
  return (
    <div className="container">
      <Head>
        <title>{post.title} - fchan.dev</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <Header />
      <main>
        <PostDetail key={post.date} pid={post.id} date={post.createdAt} category={post.category} title={post.title} content={post.content} />
        <ShareButtons pid={post.id}/>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetchPosts()
  const paths = posts.map(post => `/posts/${post.sys.id}`)
  console.log("Generated paths: ",paths);
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetchPostById(params.pid)
  let post = res.fields;
  post['createdAt'] = res.sys.createdAt
  post['id'] = res.sys.id
  return {
    props: {
      post
    }
  }
}