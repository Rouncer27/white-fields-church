import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const DownloadWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    width: 100%;
    max-width: 3rem;
    max-height: 3rem;
    margin: 0 2rem;
    cursor: pointer;
  }

  .prefix__cls-1 {
    transition: all 0.3s ease-in;
    fill: ${props => (props.color ? props.color : colors.colorPrimary)};
    cursor: pointer;
  }

  &:hover {
    .prefix__cls-1 {
      fill: ${colors.colorTertiary};
    }
  }
`

const Download = () => {
  return (
    <DownloadWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="223.18"
        height="300"
        data-name="Layer 1"
        viewBox="0 0 223.18 300"
      >
        <path
          fill="#33526c"
          d="M156.93 33.14h-40V14H106v131.06l-25.33-25.29-7.75 7.74L111.44 166 150 127.51l-7.75-7.74-25.29 25.29V85.13h56.47v138.8H49.49V85.13H95.7v-11H49.49V60.54a16.46 16.46 0 0116.45-16.45H95.7v-11H65.94a27.44 27.44 0 00-27.41 27.4v189A27.45 27.45 0 0065.94 277h91a27.45 27.45 0 0027.41-27.41v-189a27.44 27.44 0 00-27.42-27.45zm-40 41V44.09h40a16.46 16.46 0 0116.45 16.45v13.63zm40 191.83h-91a16.46 16.46 0 01-16.45-16.45v-14.64h123.9v14.67A16.46 16.46 0 01156.93 266zM131 250.41a7.33 7.33 0 01-7.33 7.32h-20.53a7.33 7.33 0 010-14.65h20.55a7.32 7.32 0 017.31 7.33z"
        ></path>
      </svg>
    </DownloadWrap>
  )
}

export default Download
