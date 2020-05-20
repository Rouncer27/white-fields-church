import React from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const PlayWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  svg {
    width: 100%;
    max-width: 3rem;
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

const Play = ({ color }) => {
  return (
    <PlayWrap color={color}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.18 29.18">
        <g
          id="prefix__Group_3338"
          data-name="Group 3338"
          transform="translate(290.258 200.258)"
        >
          <path
            id="prefix__Path_2020"
            d="M-275.668-200.258a14.6 14.6 0 00-14.59 14.59 14.6 14.6 0 0014.59 14.59 14.6 14.6 0 0014.59-14.59 14.6 14.6 0 00-14.59-14.59zm0 1.4a13.178 13.178 0 0113.188 13.188 13.178 13.178 0 01-13.188 13.188 13.178 13.178 0 01-13.188-13.188 13.178 13.178 0 0113.188-13.188zm0 0"
            className="prefix__cls-1"
            data-name="Path 2020"
          ></path>
          <path
            id="prefix__Path_2021"
            d="M128.991 125.793a.7.7 0 00-.7.7v11.822a.7.7 0 001.039.615l10.786-5.911a.7.7 0 000-1.229l-10.786-5.913a.7.7 0 00-.337-.085zm0 0"
            className="prefix__cls-1"
            data-name="Path 2021"
            transform="translate(-408.306 -318.073)"
          ></path>
        </g>
      </svg>
    </PlayWrap>
  )
}

export default Play
