import React from "react"
import BGImg from "gatsby-background-image"
import styled from "styled-components"
import {
  colors,
  H2LatoBlue,
  B1OpenSansBlue,
  H3LatoBlue,
  standardWrapper,
  B2OpenSansBlue,
} from "../../styles/helpers"

const ContentBlocksSection = styled.section`
  padding: 0 0 5rem;

  @media (min-width: 768px) {
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    padding: 4rem 0;
  }

  .qWrapper {
    ${standardWrapper};
    margin-top: 5rem;

    @media (min-width: 768px) {
      margin-top: 7.5rem;
    }

    @media (min-width: 1024px) {
      margin-top: 10rem;
    }
  }

  .questionsInformation {
    text-align: center;
    p {
      ${B2OpenSansBlue};
    }
  }

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
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
      margin-left: 5.5rem;
      margin-right: auto;
      padding: 8.5rem 0;
      padding-left: 2rem;
    }

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
      left: auto;
      right: -2rem;
      width: 100%;
      height: 100%;
      background-color: ${colors.colorTertiary};
      opacity: 0.2;
      z-index: 1;
    }
  }

  .wrapper.wrapReverse {
    flex-direction: row;
    margin: 5rem auto;

    @media (min-width: 768px) {
      margin: 7.5rem auto;
    }
    @media (min-width: 1025px) {
      margin: 14rem auto;
    }

    .content {
      @media (min-width: 1024px) {
        margin-right: 5.5rem;
        margin-left: auto;
        text-align: right;
      }
    }

    .image {
      &__graphic {
        right: auto;
        left: -2rem;
      }
    }
  }
`

const OurMissions = ({ ourMissions }) => {
  console.log("ourMissions: ", ourMissions)
  return (
    <ContentBlocksSection>
      {ourMissions.acf._wfc_orms_missions.map((mission, index) => {
        return (
          <div
            className={`wrapper${index % 2 ? " wrapReverse" : ""}`}
            key={index}
          >
            <div className="content">
              <div className="content__title">
                <h2>{mission.title}</h2>
              </div>
              <div
                className="content__wysiwyg"
                dangerouslySetInnerHTML={{
                  __html: mission.content,
                }}
              />
            </div>
            <div className="image">
              <BGImg
                tag="div"
                className="image__background"
                fluid={mission.image.localFile.childImageSharp.fluid}
              />
              <div className="image__graphic" />
            </div>
          </div>
        )
      })}
      <div className="qWrapper">
        <div
          className="questionsInformation"
          dangerouslySetInnerHTML={{
            __html: ourMissions.acf._wfc_orms_questions,
          }}
        />
      </div>
    </ContentBlocksSection>
  )
}

export default OurMissions
