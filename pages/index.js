import Head from 'next/head'

import { fetchNewPosts } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Fchan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

          {posts.map((p) => {
            return <Post key={p.date} pid={p.pid} date={p.date} category={p.category} body={p.body} title={p.title} />
          })}

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchNewPosts()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
