import React from "react"
import styled from "styled-components"
import { medWrapper, colors } from "../styles/helpers"

const ContentSection = styled.section`
  width: 100%;
  background-color: ${colors.white};

  .wrapper {
    ${medWrapper};
  }
`

const ContentWrapper = ({ children }) => {
  return (
    <ContentSection>
      <div className="wrapper">{children}</div>
    </ContentSection>
  )
}

export default ContentWrapper
