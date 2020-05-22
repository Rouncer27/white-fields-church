import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import {
  H2LatoBlue,
  colors,
  bodyCopyOne,
  buttonOneWhite,
} from "../../styles/helpers"

const RequestPrayerDiv = styled.div`
  width: 100%;
  margin: 2rem auto 4rem;

  @media (min-width: 768px) {
    width: calc(50%);
    margin: 2rem 3rem;
  }

  @media (min-width: 1024px) {
    width: calc(50% - 6rem);
    margin: 2rem 3rem;
  }

  .header {
    width: 100%;
    text-align: center;

    h2 {
      ${H2LatoBlue};
      margin-bottom: 3rem;
      color: ${colors.colorPrimary};
    }
  }

  .content {
    width: 100%;
    margin-bottom: 5rem;
    text-align: center;

    p {
      ${bodyCopyOne};
      margin: 0;
    }
  }

  .link {
    width: 100%;
    text-align: center;

    a {
      ${buttonOneWhite};
    }
  }
`

const RequestPrayer = ({ requestPrayer }) => {
  const title = requestPrayer.acf._wfc_rap_title
  const content = requestPrayer.acf._wfc_rap_content

  return (
    <RequestPrayerDiv>
      <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <div className="link">
        <Link to="/contact">Make a request</Link>
      </div>
    </RequestPrayerDiv>
  )
}

export default RequestPrayer
