/** @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import ItemTags from "./item-tags"

type BlogListItemProps = {
  post: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }
  showTags?: boolean
}

const BlogListItem = ({ post, showTags = true }: BlogListItemProps) => (
  <tr>
    <td align="left" valign="top">
      <Link to={post.slug} sx={(t) => ({ ...t.styles?.a, fontSize: `0.9rem`, color: `text`, fontWeight: `bold`})}>
        {post.title}
      </Link>
      {post.tags && showTags && (
          <React.Fragment>
            {` `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
      )}
    </td>
    <td align="right" valign="top">
      <time sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: `0.9rem` }}>{post.date}</time>
    </td>
  </tr>
)

export default BlogListItem
