/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import SchemaOrg from "./SchemaOrg"

function SEO({ description, lang, meta, title, metaImg, location }) {
  const { site, siteLogo, defaultFb } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteLogo
            metaImg
            siteUrl
          }
        }

        siteLogo: file(relativePath: { eq: "white-fields-calary-church.png" }) {
          publicURL
        }

        defaultFb: file(relativePath: { eq: "default-SEO-image.png" }) {
          publicURL
        }
      }
    `
  )

  const isBlogPost = false
  const siteLogoUrl = `${site.siteMetadata.siteUrl}/${siteLogo.publicURL}`
  const metaDescription = description || site.siteMetadata.description

  const backupDefaultFBImgUrl = defaultFb.publicURL
  const pageSpecificityFBImgUrl = metaImg
  const imgToUse =
    pageSpecificityFBImgUrl !== undefined
      ? pageSpecificityFBImgUrl
      : backupDefaultFBImgUrl
  const image = `${site.siteMetadata.siteUrl}${imgToUse}`
  const canonicalUrl = `${site.siteMetadata.siteUrl}${location}`

  return (
    <>
      <Helmet htmlAttributes={{ lang }}>
        {/* General tags */}
        <title>{title}</title>
        <meta charset="UTF-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={image} />
        <link rel="canonical" href={canonicalUrl} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={canonicalUrl} />
        {isBlogPost ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={metaDescription} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}
        <meta property="og:site_name" content={title} />
        <meta property="og:locale" content={`en_US`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={image} />
        {/* Google Ownership Verification */}
        <meta
          name="google-site-verification"
          content="1WHR_ceB5nLUaP4G2VWc1hoIzhfhsPFB-LxZjIJ24cI"
        />
        <meta
          name="google-site-verification"
          content="PsXOC2hJYcGy0AHLcm-1H0sRcXYDcdBl4P_8Znvpey8"
        />
        <meta name="msvalidate.01" content="06A8D032E9BC0C1FBE748CCDB8E1D8C2" />
      </Helmet>
      <SchemaOrg
        isBlogPost={false}
        url={site.siteMetadata.siteUrl}
        title={title}
        image={siteLogoUrl}
        logo={siteLogoUrl}
        description={description}
        datePublished="June 9, 2020"
        canonicalUrl="https://www.whitefields.ca/"
        author=""
        organization="White Fields Calvary Church"
        defaultTitle="White Fields Calvary Church"
      />
    </>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
