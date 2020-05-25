import React from "react"
import styled from "styled-components"
import {
  colors,
  H2LatoGold,
  B1OpenSansWhite,
  H4LatoGold,
  H4LatoBlue,
} from "../../styles/helpers"

const DonateModal = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  z-index: 99999999;
  overflow-y: scroll;

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

    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (min-width: 1025px) {
      max-width: 110rem;
      height: auto;
      padding: 8rem;
    }

    .closeButton {
      position: absolute;
      top: 1rem;
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
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
      }
    }
  }
`

const Details = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50%);
  }
  .title {
    h2 {
      ${H2LatoGold};
    }
  }

  .subTitle {
    h3 {
      ${H4LatoGold};
    }
  }

  .paragraph {
    p {
      ${B1OpenSansWhite};
    }

    p.paragraph__contact {
      color: ${colors.colorSecondary};
    }
  }
`

const Explain = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 768px) {
    width: calc(50%);
  }

  .bubbleWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    left: 5rem;
    padding: 2rem;
    border-radius: 2rem;
    background-color: ${colors.colorSecondary};

    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      padding: 5rem;
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: -3rem;
      width: 0;
      height: 0;
      border-left: 3rem solid transparent;
      border-right: 3rem solid transparent;
      border-bottom: 3rem solid ${colors.colorSecondary};
      content: "";
    }
  }

  h3 {
    ${H4LatoBlue};
  }

  p {
    ${B1OpenSansWhite};
  }
`

const Donate = ({ isActive, handleModalState }) => {
  return (
    <DonateModal isActive={isActive}>
      <div className="modalInner">
        <div className="modalInner__content">
          <Details>
            <div className="title">
              <h2>Donate Today</h2>
            </div>
            <div className="paragraph">
              <p>
                We have made Giving available to you through e-Transfer for your
                convenience. If the Lord leads you to give to White Fields
                Calvary Church with e-Transfer, then please continue reading for
                instructions on how to make a donation.
              </p>
            </div>
            <div className="subTitle">
              <h3>To send an Interac e-Transfer:</h3>
            </div>
            <div className="paragraph">
              <p>
                Login to online or mobile banking at your participating
                financial institution Choose Interac e-Transfer within the
                Transfer/Payment menu options Create/Select a recipient by
                entering email address: accounting@whitefields.ca Follow the
                instructions to confirm the information and complete the
                transfer Interac e-Transfer confirmation numbers are saved in
                your online banking history You will receive an email
                notification and/or text message once the transfer has gone
                through depending on your set up with your financial institution
                White Fields is set up for automatic deposit so no password is
                needed
              </p>
              <p className="paragraph__contact">
                If you have any further questions, please email Michelle Duffy
                at admin@whitefields.ca or call 587-997-4886.
              </p>
            </div>
          </Details>
          <Explain>
            <div className="bubbleWrap">
              <div className="bubbleWrap__inner">
                <div>
                  <h3>What is an Interac e-Transfer?</h3>
                </div>
                <div>
                  <p>
                    Interac e-Transfer is a simple, convenient, and secure
                    option to send money directly from one bank account to
                    another. All you need is access to online or mobile banking
                    through a participating financial institution, and you can
                    send money to White Fields Calvary Church — without sharing
                    any personal financial information. It is an alternative way
                    to give, or pay registration fees for church activities you
                    or your family are participating in.
                  </p>
                </div>
              </div>
            </div>
          </Explain>
        </div>
        <div className="closeButton">
          <button onClick={handleModalState}>&#88;</button>
        </div>
      </div>
      <div className="modalBackground" onClick={handleModalState} />
    </DonateModal>
  )
}

export default Donate
