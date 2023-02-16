/** @jsx jsx */
import { jsx } from "theme-ui"
import { HeadFC, Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
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
      
      {/* <section sx={{ mb: [3, 3, 5], p: { fontSize: [1, 1, 1], mt: 1 }, variant: `section_hero` }}>
        <Hero />
      </section> */}
      <Title text="About me" children={undefined} />
      <Grid container>
        <Grid item xs={8}>
          <dl>
            <dt>名前</dt><dd>岡﨑 正悟 (OKAZAKI Shogo)</dd>
            <dt>所属</dt><dd><a href="https://www.monotaro.com">株式会社 MonotaRO</a></dd>
            <dt>
              連絡先・SNS
            </dt>
            <dd>
              <a href="mailto:okazaki@zakioka.net"><EmailIcon /></a>
              <a href="https://twitter.com/tsuchinoko0402"><TwitterIcon /></a>
              <a href="https://github.com/tsuchinoko0402"><GitHubIcon /></a>
              <a href="https://www.facebook.com/okazaki.shogo"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/in/shogo-okazaki-a41721189/"><LinkedInIcon /></a>
            </dd>
          </dl>
        </Grid>
        <Grid item xs={4}>
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
      <Listing posts={posts} showTags={true} />
      <List>
        <Bottom />
      </List>
    </Layout>
  )
}

export default Homepage

export const Head: HeadFC = () => <Seo />
