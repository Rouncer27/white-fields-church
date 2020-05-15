import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  svg {
    width: 100%;
    max-width: 3rem;
    margin: 0 2rem;
  }

  .prefix__cls-1 {
    transition: all 0.3s ease-in;
    fill: ${colors.colorPrimary};
    cursor: pointer;
  }

  &:hover {
    .prefix__cls-1 {
      fill: ${colors.colorTertiary};
    }
  }
`

const Contact = () => {
  return (
    <ContactWrap>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.017 19.868">
        <path
          className="prefix__cls-1"
          d="M221.037 341.674a2.344 2.344 0 00-1.026-.239h-25.368a2.349 2.349 0 00-1.03.24 2.316 2.316 0 00-1.295 2.084v15.218a2.327 2.327 0 002.325 2.325h25.367a2.327 2.327 0 002.325-2.325V343.76a2.318 2.318 0 00-1.298-2.086zm-27.011 3.054l7.693 6.684-7.693 6.608zm.776-1.585h25.05l-12.032 10.451a.815.815 0 01-.985 0zm8.22 9.4l2.7 2.346a2.517 2.517 0 003.21 0l2.7-2.346 8.209 7.053h-25.029zm9.913-1.132l7.693-6.684v13.291z"
          data-name="Path 11674"
          transform="translate(-192.318 -341.435)"
        ></path>
      </svg>
    </ContactWrap>
  )
}

export default Contact
