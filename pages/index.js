import Head from 'next/head'

import { fetchNewPosts } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>fchan.dev</title>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      </Head>

      <Header />
      <main>

          {posts.map((p) => {
            return <Post key={p.date} pid={p.id} date={p.createdAt} category={p.category} content={p.content} title={p.title} />
          })}

      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchNewPosts()
  const posts = await res.map((p) => {
    let fld = p.fields;
    fld['createdAt'] = p.sys.createdAt
    fld['id'] = p.sys.id
    return fld
  })

  return {
    props: {
      posts,
    },
  }
}
