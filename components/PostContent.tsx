import Markdown from 'markdown-to-jsx'
import React, { useEffect } from 'react'

export const PostContent = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <>
      <Markdown options={{ slugify: str => str }} className="markdown">{content}</Markdown>
    </>
  )
}