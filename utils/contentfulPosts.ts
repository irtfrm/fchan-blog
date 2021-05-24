const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchPosts() {
  const posts = await client.getEntries({content_type: "posts"});
  if (posts.items) return posts.items
}

export async function fetchNewPosts() {
  const posts = await client.getEntries({
    content_type: "posts",
    order: "-sys.createdAt"
  });
  if (posts.items) return posts.items
}

export async function fetchPostById(id) {
  const entries = await client.getEntries({
    content_type: "posts",
    limit: 1,
    "sys.id": id,
  });
  if (entries.items) {
    return entries.items[0];
  }
}

