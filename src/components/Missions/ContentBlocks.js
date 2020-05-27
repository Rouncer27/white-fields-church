import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import {
  colors,
  H2LatoBlue,
  B1OpenSansBlue,
  H3LatoBlue,
} from "../../styles/helpers"

const ContentBlocksSection = styled.section`
  padding: 0 0 5rem;

  @media (min-width: 768px) {
    padding: 7.5rem 0;
  }

  @media (min-width: 1024px) {
    padding: 10rem 0;
  }

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .content {
    width: 100%;
    padding: 2rem;

    @media (min-width: 768px) {
      width: calc(100%);
      margin-right: auto;
      margin-left: auto;
      padding: 2rem 10rem;
    }

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 75rem;
      margin-right: 5.5rem;
      margin-left: auto;
      padding: 8.5rem 0;
      padding-left: 2rem;
    }

    &__wysiwyg {
      h1,
      h2 {
        ${H2LatoBlue};
      }
      h3 {
        ${H3LatoBlue};
      }
      p {
        ${B1OpenSansBlue};
      }

      ul {
        margin-top: 2rem;
        margin-bottom: 2rem;
        list-style-position: inside;

        li {
          ${B1OpenSansBlue};
          list-style-type: disc;
        }
      }
    }
  }

  .image {
    position: relative;
    width: 100%;
    height: calc(100vw - 4rem);
    max-height: 40rem;

    @media (min-width: 768px) {
      width: calc(100%);
      max-height: 40rem;
    }

    @media (min-width: 1024px) {
      width: calc(40%);
      height: calc(35vw - 2rem);
      max-height: 42.3rem;
    }

    @media (min-width: 1600px) {
      max-height: 51.1rem;
    }

    &__background {
      position: absolute !important;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }

    &__graphic {
      position: absolute;
      top: 2rem;
      left: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }
`

const ContentBlocks = ({ contentBlocks }) => {
  return (
    <ContentBlocksSection>
      {contentBlocks.acf._wfc_cnbl_blocks.map((block, index) => {
        return (
          <div className="wrapper" key={index}>
            <div className="content">
              <div
                className="content__wysiwyg"
                dangerouslySetInnerHTML={{
                  __html: block.content,
                }}
              />
            </div>
            <div className="image">
              <BGImg
                tag="div"
                className="image__background"
                fluid={block.image.localFile.childImageSharp.fluid}
              />
              <div className="image__graphic" />
            </div>
          </div>
        )
      })}
    </ContentBlocksSection>
  )
}

export default ContentBlocks
