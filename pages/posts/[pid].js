import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import PostDetail from '@components/PostDetail'
import { fetchPosts, fetchPostByPid } from '@utils/contentfulPosts'

export default function PostPage({ post }) {
  return (
    <div className="container">
      <Head>
        <title>{post.title} - fchan.dev</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>

      <main>
        <Header />
        <PostDetail key={post.date} pid={post.pid} date={post.date} category={post.category} body={post.body} title={post.title} content={post.content} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await fetchPosts()
  const paths = posts.map(post => `/posts/${post.fields.pid}`)
  console.log("Generated paths: ",paths);
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetchPostByPid(params.pid)
  const post = await res.fields
  return {
    props: {
      post
    }
  }
}