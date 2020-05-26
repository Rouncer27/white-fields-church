import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Dove from "../Graphics/Dove"
import {
  colors,
  H2LatoBlue,
  H4LatoBlue,
  B1OpenSansBlue,
} from "../../styles/helpers"

const KidsSection = styled.section`
  position: relative;
  background-color: ${colors.colorTertiary};

  .wrapper {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    z-index: 5;
  }

  .content {
    align-self: center;
    width: 100%;
    padding: 2rem;

    @media (min-width: 1024px) {
      width: calc(60% - 5.5rem);
      max-width: 55rem;
      margin-left: 5.5rem;
      margin-right: auto;
      padding: 5rem 0;
    }

    h2 {
      ${H2LatoBlue};
    }

    h3 {
      ${H4LatoBlue};
    }

    p {
      ${B1OpenSansBlue};
    }
  }

  .images {
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: 1024px) {
      width: calc(40%);
    }

    &__item {
      width: calc(33.33%);

      @media (min-width: 1024px) {
        width: 100%;
        flex-grow: 1;
      }
    }
  }

  .graphic {
    position: absolute;
    bottom: 20rem;
    right: 10rem;
    width: calc(152.2rem / 3.5);
    height: calc(140.1rem / 3.5);
    z-index: 10;
  }
`

const Kids = ({ wfKids }) => {
  return (
    <KidsSection>
      <div className="wrapper">
        <div className="content">
          <div>
            <h2>{wfKids.acf._wfc_wfk_title}</h2>
          </div>
          <div>
            {wfKids.acf._wfc_wfk_kids_section.map((section, index) => {
              return (
                <div key={index}>
                  <h3>{section.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="images">
          {wfKids.acf._wfc_wfk_images.map((section, index) => {
            return (
              <div className="images__item" key={index}>
                <Img
                  fluid={section.image.localFile.childImageSharp.fluid}
                  alt={section.image.alt_text}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="graphic">
        <Dove />
      </div>
    </KidsSection>
  )
}

export default Kids
