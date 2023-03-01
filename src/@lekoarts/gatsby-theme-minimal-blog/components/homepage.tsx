/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "./listing"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Bottom from "../texts/bottom.mdx"
import { StaticImage } from "gatsby-plugin-image"
import Grid from "@material-ui/core/Grid"
import EmailIcon from '@material-ui/icons/Email'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'

export type MBHomepageProps = {
  posts: {
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
  }[]
}

const Homepage = ({ posts }: MBHomepageProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <Title text="About me" children={undefined} />
      <Grid container sx={{ mt: [6, 3, 3] }}>
        <Grid item xs={8}>
          <dl>
            <dt>名前</dt><dd>岡﨑 正悟 (OKAZAKI Shogo)</dd>
            <dt>所属</dt><dd><a href="https://www.monotaro.com">株式会社 MonotaRO</a></dd>
            <dt>
              連絡先・SNS
            </dt>
            <dd>
              <Link to="mailto:okazaki@zakioka.net" target="_blank" >
                <EmailIcon/>
              </Link>
              <Link to="https://twitter.com/tsuchinoko0402" target="_blank" >
                <TwitterIcon/>
              </Link>
              <Link to="https://github.com/tsuchinoko0402" target="_blank" >
                <GitHubIcon/>
              </Link>
              <Link to="https://www.facebook.com/okazaki.shogo" target="_blank" >
                <FacebookIcon/>
              </Link>
              <Link to="https://www.linkedin.com/in/shogo-okazaki-a41721189/" target="_blank" >
                <LinkedInIcon/>
              </Link>
            </dd>
          </dl>
        </Grid>
        <Grid item xs={4} >
          <StaticImage
            src="../../../../static/profile.jpg" // 相対パス
            width={180}
            as="div"
            alt="profile"
          />
        </Grid>
      </Grid>
      <Title text="最近の投稿">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts} showTags={true} sx={{ mt: [3, 3, 3] }} />
      <Bottom />
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
