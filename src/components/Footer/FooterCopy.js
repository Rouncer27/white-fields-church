import React from "react"
import styled from "styled-components"
import { colors, footerType } from "../../styles/helpers"

const CopySection = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  text-align: center;

  p {
    ${footerType};
    margin: 0;
  }

  a {
    ${footerType};
    margin: 0;

    &:hover {
      color: ${colors.colorSecondary};
    }
  }
`

const FooterCopy = ({ swbCred }) => {
  return (
    <CopySection>
      <p>
        Copyright © {new Date().getFullYear()} White Fields Calvary Church.{" "}
        {swbCred && (
          <span>
            Designed, developed and built by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://switchbackcreative.ca"
            >
              Switchback Creative
            </a>
            . Built with ♡ and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </a>
            .
          </span>
        )}{" "}
      </p>
    </CopySection>
  )
}

export default FooterCopy
