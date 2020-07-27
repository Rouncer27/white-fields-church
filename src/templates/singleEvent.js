import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import {
  standardWrapper,
  H1LatoBlue,
  B1OpenSansBlue,
  fonts,
  colors,
  H2LatoBlue,
  H3LatoBlue,
  H4LatoBlue,
} from "../styles/helpers"

const SingleEventStyle = styled.article`
  .wrapper {
    ${standardWrapper};
  }

  .eventImage {
    width: 100%;
    max-width: 60rem;
    margin: 2rem 0;
  }

  .eventTitle {
    width: 100%;
    max-width: 90rem;

    h1 {
      ${H1LatoBlue};
    }
  }

  .eventWysiwyg {
    width: 100%;
    width: 100%;
    max-width: 90rem;
    margin-top: 2.5rem;
    margin-right: auto;
    margin-bottom: 5rem;
    margin-left: auto;

    &::after {
      display: table;
      clear: both;
      content: "";
    }

    .post-edit-link {
      font-size: 1.6rem;
    }

    blockquote {
      display: block;
      width: 95%;
      margin: 1.5rem auto 2rem;
      padding: 0 2.25rem;
      border-right: 5px solid ${colors.grey};
      border-left: 5px solid ${colors.grey};
      font-size: 1.6rem;
      font-style: $italic;

      @media (min-width: 768px) {
        width: 80%;
        margin: 5em auto;
        padding: 0 3rem;
      }

      p {
        margin-bottom: 0;

        &::before,
        &::after {
          font-family: ${fonts.fontAwesome};
          color: rgba($color-secondary, 1);
        }

        &::before {
          padding-right: 0.25em;
          content: "\f10d";
        }

        &::after {
          padding-left: 0.25em;
          content: "\f10e";
        }
      }
    }

    hr {
      display: block;
      height: 0.25em;
      background-color: ${colors.colorSecondary};
    }

    ul {
      margin-bottom: 2.5rem;

      li {
        position: relative;
        margin-bottom: 0.75em;
        padding-left: 0.75em;
        font-size: 1.6rem;

        &::before {
          font-family: ${fonts.fontAwesome};
          position: absolute;
          top: 0.1em;
          left: 0;
          padding-right: 0.5em;
          color: rgba(${colors.grey}, 0.75);
          content: "\f0da";
        }
      }
    }

    ol {
      margin-bottom: 2.5rem;
      font-size: 1.6rem;

      li {
        margin-bottom: 0.9rem;
        font-size: 1.6rem;
        list-style-position: inside;
        list-style-type: decimal;
      }
    }

    h1 {
      ${H1LatoBlue};
    }

    h2 {
      ${H2LatoBlue};
    }

    h3 {
      ${H3LatoBlue}
    }

    h4,
    h5,
    h6 {
      ${H4LatoBlue}
    }

    p {
      ${B1OpenSansBlue};
      a {
        transition: all 0.3s;
        color: ${colors.colorSecondary};
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorShad};
        }
      }
    }

    a {
      transition: all 0.3s;
      color: ${colors.colorSecondary};
      font-weight: bold;
      font-size: 1em;

      &:hover {
        color: ${colors.colorShad};
      }
    }

    del {
      color: ${colors.colorSecondary};
    }

    /* WordPress Core */
    .alignnone {
      margin: 5px 20px 20px 0;
    }

    .aligncenter,
    div.aligncenter {
      display: block;
      margin: 2rem auto;
    }

    .alignright {
      float: right;
      margin: 5px 0 20px 20px;
    }

    .alignleft {
      float: left;
      margin: 5px 20px 20px 0;
    }

    a img.alignright {
      float: right;
      margin: 5px 0 20px 20px;
    }

    a img.alignnone {
      margin: 5px 20px 20px 0;
    }

    a img.alignleft {
      float: left;
      margin: 5px 20px 20px 0;
    }

    a img.aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .wp-caption {
      background: #fff;
      border: 1px solid #f0f0f0;
      max-width: 96%; /* Image does not overflow the content area */
      padding: 5px 3px 10px;
      text-align: center;
    }

    .wp-caption.alignnone {
      margin: 5px 20px 20px 0;
    }

    .wp-caption.alignleft {
      margin: 5px 20px 20px 0;
    }

    .wp-caption.alignright {
      margin: 5px 0 20px 20px;
    }

    .wp-caption img {
      border: 0 none;
      height: auto;
      margin: 0;
      max-width: 98.5%;
      padding: 0;
      width: auto;
    }

    .wp-caption p.wp-caption-text {
      font-size: 1.1rem;
      line-height: 17px;
      margin: 0;
      padding: 0 4px 5px;
    }

    /* Text meant only for screen readers. */
    .screen-reader-text {
      clip: rect(1px, 1px, 1px, 1px);
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
    }

    .screen-reader-text:focus {
      background-color: #f1f1f1;
      border-radius: 3px;
      box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
      clip: auto !important;
      color: #21759b;
      display: block;
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: bold;
      height: auto;
      left: 5px;
      line-height: normal;
      padding: 15px 23px 14px;
      text-decoration: none;
      top: 5px;
      width: auto;
      z-index: 100000; /* Above WP toolbar. */
    }

    img {
      width: auto;
    }
  }
`

const singleEvent = props => {
  const location = props.location
  const { event } = props.data

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <SingleEventStyle>
        <div className="wrapper">
          <div className="eventImage">
            <Img
              fluid={
                event.acf._wfcc_evepos_featured_image.localFile.childImageSharp
                  .fluid
              }
              alt={event.title}
            />
          </div>
          <div className="eventTitle">
            <h1 dangerouslySetInnerHTML={{ __html: event.title }} />
          </div>
          <div
            className="eventWysiwyg"
            dangerouslySetInnerHTML={{ __html: event.acf._wfcc_evepos_content }}
          />
        </div>
      </SingleEventStyle>
    </Layout>
  )
}

export const eventsPostQuery = graphql`
  query eventsPost($id: Int!) {
    event: wordpressWpEventsPost(wordpress_id: { eq: $id }) {
      title
      acf {
        _wfcc_evepos_content
        _wfcc_evepos_featured_image {
          alt_text
          localFile {
            childImageSharp {
              fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default singleEvent
