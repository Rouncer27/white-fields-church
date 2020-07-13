import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import {
  colors,
  H2LatoBlue,
  B1OpenSansBlue,
  H3LatoBlue,
  medWrapper,
} from "../../styles/helpers"

const ContentBlocksSection = styled.section`
  padding: 0 0 5rem;

  @media (min-width: 768px) {
    padding: 0 0 7.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 0 10rem;
  }

  .content {
    &__title {
      h2 {
        ${H2LatoBlue};
      }
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
      width: calc(40%);
      height: calc(40vw - 2rem);
    }

    @media (min-width: 1024px) {
      width: calc(35%);
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
  }
`

const BlockWrapper = styled.div`
  background-color: ${props =>
    props.reversed ? colors.white : colors.colorPrimary};
  .wrapper {
    ${medWrapper};
    flex-direction: ${props => (props.reversed ? "row-reverse" : "row")};
    position: relative;
    align-items: center;

    @media (min-width: 1024px) {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .content {
    width: 100%;
    margin-top: 5rem;

    @media (min-width: 768px) {
      width: calc(60% - 3rem);
      margin-top: 0;
      margin-bottom: 5rem;
      margin-right: 3rem;
    }

    @media (min-width: 1024px) {
      width: calc(65% - 7.5rem);
      margin-right: auto;
      margin-right: ${props => (props.reversed ? "auto" : "7.5rem")};
      margin-left: ${props => (props.reversed ? "7.5rem" : "auto")};
    }

    h1,
    h2,
    h3,
    p,
    ul,
    li {
      color: ${props => (props.reversed ? colors.colorPrimary : colors.white)};
    }
  }

  .image {
    &__graphic {
      position: absolute;
      top: 2rem;
      right: ${props => (props.reversed ? "-2rem" : "auto")};
      left: ${props => (props.reversed ? "auto" : "-2rem")};
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
        const layout = index % 2 === 0 ? true : false
        console.log(block, " --> ", layout)
        return (
          <BlockWrapper key={index} reversed={!layout}>
            <div className="wrapper">
              <div className="content">
                <div className="content__title">
                  <h2>{block.title}</h2>
                </div>
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
          </BlockWrapper>
        )
      })}
    </ContentBlocksSection>
  )
}

export default ContentBlocks
