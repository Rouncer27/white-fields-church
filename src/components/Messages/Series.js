import React, { useEffect } from "react"
import styled from "styled-components"
import { medWrapper } from "../../styles/helpers"

import BrushStrokeSeven from "../Graphics/BrushStrokeSeven"
import BrushStrokeFour from "../Graphics/BrushStrokeFour"
import SeriesItem from "./SeriesItem"

const SeriesSection = styled.section`
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding-bottom: 10rem;
  }

  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .graphic {
    position: absolute;
    top: 5rem;
    right: -15rem;
    width: calc(346.4rem / 3.25);
    height: calc(425.3rem / 3.25);
    z-index: -1;

    @media (min-width: 768px) {
      left: -10rem;
      width: calc(346.4rem / 3);
      height: calc(425.3rem / 3);
    }

    @media (min-width: 1025px) {
      top: -25rem;
      width: calc(346.4rem / 4);
      height: calc(425.3rem / 4);
    }
  }

  .graphicTwo {
    position: absolute;
    bottom: 5rem;
    right: -15rem;
    width: calc(249rem / 4);
    height: calc(216.3rem / 4);
    z-index: -1;

    @media (min-width: 768px) {
      right: -10rem;
      width: calc(249rem / 4);
      height: calc(216.3rem / 4);
      transform: rotate(30deg);
    }

    @media (min-width: 1025px) {
      bottom: -35rem;
      width: calc(249rem / 1.6);
      height: calc(216.3rem / 1.6);
    }
  }
`

const isBrowser = () => typeof window !== "undefined"

const Series = ({ series, subSplash }) => {
  const sortedSeries = series.edges.sort((a, b) => {
    const aValue = a.node.acf._wfc_mescat_set_current
    const bValue = b.node.acf._wfc_mescat_set_current
    return aValue === bValue ? 0 : aValue ? -1 : 1
  })

  useEffect(() => {
    if (isBrowser()) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js"
      script.onload = function () {
        window.subsplashEmbed(
          "+t639/lb/li/+py9mzq8?embed&branding&1616164079306",
          "https://subsplash.com/",
          "subsplash-embed-zczqjkt"
        )
      }
      document.body.appendChild(script)
    }
  }, [])

  return (
    <SeriesSection>
      <div className="wrapper">
        {/* {sortedSeries.map((item, index) => {
          if (item.node.count <= 0) return
          return (
            <SeriesItem
              key={item.node.wordpress_id}
              item={item}
              itemIndex={index}
              currentTeaching={item.node.acf._wfc_mescat_set_current}
            />
          )
        })} */}
        <div id="subsplash-embed-zczqjkt" />
      </div>
      <div className="graphic">
        <BrushStrokeSeven />
      </div>
      <div className="graphicTwo">
        <BrushStrokeFour />
      </div>
    </SeriesSection>
  )
}

export default Series
