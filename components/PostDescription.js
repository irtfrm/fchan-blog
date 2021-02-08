import Markdown from 'markdown-to-jsx'

export const PostDescription = ({ content }) => {
  return (
      <Markdown options={{ slugify: str => str }} className="post-description">{content.split('\n\n')[0]}</Markdown>
  )
}