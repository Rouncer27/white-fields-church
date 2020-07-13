import React from "react"
import styled from "styled-components"

import FooterLeftLogo from "./FooterLeftLogo"
import FooterLeftDetails from "./FooterLeftDetails"
import FooterLeftNav from "./FooterLeftNav"

const FooterLeftSection = styled.div`
  width: 100%;
  margin-bottom: 5rem;

  @media (min-width: 1025px) {
    width: 50%;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }

  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;

    &__details {
      width: 100%;

      @media (min-width: 768px) {
        width: calc(70% - 4rem);
        margin-right: 4rem;
      }

      @media (min-width: 1025px) {
        width: calc(50% - 5rem);
        margin-right: 5rem;
      }
    }

    &__nav {
      width: 100%;
      margin-top: 2.5rem;
      text-align: right;

      @media (min-width: 768px) {
        width: 30%;
        margin-top: 0;
        text-align: left;
      }

      @media (min-width: 1025px) {
        width: 50%;
        margin-top: 0;
        text-align: left;
      }
    }
  }
`

const FooterLeft = ({ handleModalState }) => {
  return (
    <FooterLeftSection>
      <div className="wrapper">
        <div className="wrapper__details">
          <FooterLeftLogo />
          <FooterLeftDetails />
        </div>
        <div className="wrapper__nav">
          <FooterLeftNav handleModalState={handleModalState} />
        </div>
      </div>
    </FooterLeftSection>
  )
}

export default FooterLeft
