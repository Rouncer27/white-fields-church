require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `White Fields Calvary Church`,
    description: `White Fields Calvary Church`,
    author: `@switchback4ever`,
    metaImg: `src/images/default-SEO-image.png`,
    siteLogo: `src/images/white-fields-calary-church.png`,
    siteUrl: `https://www.whitefields.ca/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#375d77`,
        theme_color: `#deb46e`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.whitefields.ca/",
        sitemap: "https://www.whitefields.ca/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.whitefields.ca/`,
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: process.env.GATSBY_URL,
        protocol: process.env.GATSBY_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/posts",
          "**/media",
          "**/pages",
          "**/wp-api-menus/v2",
          "**/wp-api-menus/v2/menus",
          "**/audio_messages",
          "**/message_type",
          "**/calendar",
          "**/events_post",
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeSecurityHeaders: false,
        headers: {
          "/*": [
            "cache-control: public,max-age=60",
            "X-Frame-Options: sameorigin",
            "X-XSS-Protection: 1; mode=block",
            "X-Content-Type-Options: nosniff",
            "Feature-Policy: camera 'none'; geolocation 'none'; microphone 'none'",
          ],
          "/**/*.html": ["cache-control: public, max-age=300"],
          "/static/*": ["cache-control: public, max-age=31536000, immutable"],
          "/*.js": ["cache-control: public, max-age=31536000, immutable"],
          "/*.css": ["cache-control: public, max-age=31536000, immutable"],
          "/sw.js": ["cache-control: public, max-age=0, must-revalidate"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
