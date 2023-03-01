/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import Button from "@material-ui/core/Button"

type TagsProps = {
  tags: {
    name: string
    slug: string
  }[]
}

const ItemTags = ({ tags }: TagsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {tags.map((tag, i) => (
        <React.Fragment key={tag.slug}>
        {!!i && ` `}
          <Button
            variant="outlined"
            disableRipple
            href={replaceSlashes(`/${basePath}/${tagsPath}/${tag.slug}`)}
            sx={({ fontSize: `0.7rem`, padding: `0.01em 0.01em`, textTransform: 'none'})}
          >
            {tag.name}
          </Button>
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default ItemTags
