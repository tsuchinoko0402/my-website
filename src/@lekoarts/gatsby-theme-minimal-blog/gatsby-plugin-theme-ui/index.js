import { merge } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"
import { lightThemeVars, darkThemeVars } from "@lekoarts/gatsby-theme-minimal-blog/src/utils/prism-themes"

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `dark`,
  },
  colors: {
    primary: tailwind.colors.purple[7],
    secondary: `#5f6c80`,
    toggleIcon: tailwind.colors.gray[8],
    heading: tailwind.colors.black,
    divide: tailwind.colors.gray[4],
    muted: tailwind.colors.gray[2],
    highlightLineBg: `rgba(0, 0, 0, 0.035)`,
    ...lightThemeVars,
    modes: {
      dark: {
        text: tailwind.colors.gray[4],
        primary: tailwind.colors.purple[4],
        secondary: `#8a9ab0`,
        toggleIcon: tailwind.colors.gray[4],
        background: `#1A202C`,
        heading: tailwind.colors.white,
        divide: tailwind.colors.gray[8],
        muted: tailwind.colors.gray[8],
        highlightLineBg: `rgba(255, 255, 255, 0.1)`,
        ...darkThemeVars,
      },
    },
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    html: {
      fontSize: `62.5%`,
    },
    body: {
      fontSize: `0.9rem`,
      lineHeight: 2
    },
    p: {
      fontSize: `0.9rem`,
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 1],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 1],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: `2.2rem`,
      mt: 4,
      ":first-letter": {
        fontSize: `150%`,
        color: `#7cc7e8`,
      },
    },
    h2: {
      variant: `text.heading`,
      fontSize: `1.8rem`,
      mt: 4,
      padding: `0.1rem 0.1rem 0.1rem 0.1rem`,
      background: `linear-gradient(transparent 70%, #7cc7e8 70%)`,
    },
    h3: {
      variant: `text.heading`,
      fontSize: `1.5rem`,
      mt: 4,
      borderBottom: `solid 3.5px #98d98e`,
      position: `relative`,
      ":after": {
        position: `absolute`,
        content: `" "`,
        display: `block`,
        borderBottom: `solid 3.5px #5eb954`,
        bottom: `-3px`,
        width: `20%`,
      },
    },
    h4: {
      variant: `text.heading`,
      fontSize: `1.3rem`,
      mt: 3,
      position: `relative`,
      padding: `0.1rem 0.1rem 0.1rem 0.3rem`,
      borderLeft: `solid 8px  #f19db5`, /*左線*/
      borderBottom: `solid 1.5px #e8d3d1`, /* 下線 */
    },
    h5: {
      variant: `text.heading`,
      fontSize: `1.1rem`,
      mt: 3,
      padding: `0.1rem 0.1rem 0.1rem 0.2rem`,
      borderLeft: `solid 5px  #812990`, /*左線*/
      borderBottom: `dashed 1px #812990`, /* 下線 */
    },
    h6: {
      variant: `text.heading`,
      fontSize: `1.0rem`,
      mb: 2,
      borderBottom: `dashed 1px #812990`, /* 下線 */
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `4px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
    img: {
      borderRadius: `4px`,
      boxShadow: `lg`,
      maxWidth: `100%`,
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
    content: {
      figure: {
        margin: 0,
        img: {
          borderRadius: `4px`,
          boxShadow: `lg`,
          maxWidth: `100%`,
        },
      },
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  copyButton: {
    backgroundColor: `background`,
    border: `none`,
    color: `text`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `all 0.3s ease-in-out`,
    "&[disabled]": {
      cursor: `not-allowed`,
    },
    ":not([disabled]):hover": {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  tagButton: {
    fontSize: `0.8rem`,
    fontWeight: `700`,
    lineHeight: `1.5`,
    position: `relative`,
    display: `inline-block`,
    padding: `0.2rem 0.2rem`,
    cursor: `pointer`,
    "-webkit-user-select": `none`,
    "-moz-user-select": `none`,
    "-ms-user-select": `none`,
    userSelect: `none`,
    "-webkit-transition": `all 0.3s`,
    transition: `all 0.3s`,
    textALign: `center`,
    verticalAlign: `middle`,
    textDecoration: `none`,
    letterSpacing: `0.1em`,
    color: `#212529`,
    borderRadius: `0.5rem`,
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
})

export default theme
