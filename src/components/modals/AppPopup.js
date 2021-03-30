import React, { useEffect } from "react"
import styled from "styled-components"
import { colors } from "../../styles/helpers"

const isBrowser = () => typeof window !== "undefined"

const AppPopup = ({ popactive, handleSetAppDownload }) => {
  useEffect(() => {
    if (isBrowser()) {
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js"
      script.onload = function () {
        window.subsplashEmbed(
          "+t639/ap",
          "https://subsplash.com/",
          "subsplash-embed-t639"
        )
      }
      document.body.appendChild(script)
    }
  }, [])
  return (
    <AppPopupStyled isActive={popactive}>
      <div className="modalInner">
        <div className="modalInner__content">
          <div id="subsplash-embed-t639" />
        </div>
        <div className="closeButton">
          <button onClick={handleSetAppDownload}>&#88;</button>
        </div>
      </div>
      <div className="modalBackground" onClick={handleSetAppDownload} />
    </AppPopupStyled>
  )
}

const AppPopupStyled = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 99999999;
  overflow: scroll;

  .modalBackground {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .modalInner {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
    background-color: ${colors.colorPrimary};
    opacity: 0.95;
    box-shadow: 8px 9px 19px 0 rgba(0, 0, 0, 0.49);
    z-index: 999999999;
    overflow: scroll;

    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      margin: 5rem auto;
      transform: translate(-50%, -50%);
    }

    @media (min-width: 1025px) {
      max-width: 110rem;
      margin: 5rem auto;
      padding: 8rem;
    }

    .closeButton {
      position: absolute;
      top: 10rem;
      right: 1rem;

      button {
        width: 3.5rem;
        height: 3.5rem;
        transition: all 0.3s ease;
        border-radius: 50%;
        border: 0.25rem solid ${colors.colorSecondary};
        background-color: ${colors.colorSecondary};
        color: ${colors.colorPrimary};
        font-weight: 700;
        cursor: pointer;

        &:hover {
          background-color: ${colors.white};
          color: ${colors.colorSecondary};
        }
      }
    }

    &__content {
      overflow: scroll;

      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
      }
    }
  }
`

export default AppPopup
