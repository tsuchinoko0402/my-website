/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; 2021-{new Date().getFullYear()} by OKAZAKI Shogo. All rights reserved.
      </div>
      <div>
        powerd by {` `}
        <Link
          aria-label="Link to Gatsby.js page"
          href="https://www.gatsbyjs.com/"
        >
          Gatsby
        </Link>
        {` `}
        +
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-minimal-blog"
        >
          gatsby-theme-minimal-blog
        </Link>
      </div>
    </footer>
  )
}

export default Footer
