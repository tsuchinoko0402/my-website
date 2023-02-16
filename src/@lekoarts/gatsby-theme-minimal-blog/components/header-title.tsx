/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-site-metadata"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src//hooks/use-minimal-blog-config"
import { StaticImage } from "gatsby-plugin-image"

const HeaderTitle = () => {
  const { siteTitle } = useSiteMetadata()
  const { basePath } = useMinimalBlogConfig()

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <StaticImage
        src="../../../../static/favicon-32x32.png" // 相対パス
        width={30}
        as="div"
        alt="tsuchinoko"
      />
      <div sx={{ my: 0, fontWeight: `semibold`, fontSize: `1rem`}}>OKAZAKI Shogo's Website</div>
    </Link>
  )
}

export default HeaderTitle
