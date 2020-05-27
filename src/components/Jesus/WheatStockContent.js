import React from "react"
import styled from "styled-components"
import { H2LatoBlue, B1OpenSansBlue, medWrapper } from "../../styles/helpers"
import WheatStock from "../Graphics/WheatStock"

const WheatStockSection = styled.section`
  position: relative;
  .wrapper {
    ${medWrapper};
  }
  .wysiwyg {
    width: 100%;
    @media (min-width: 1025px) {
      max-width: 60rem;
      margin-left: 0;
      margin-right: auto;
    }

    h2 {
      ${H2LatoBlue};
    }

    p {
      ${B1OpenSansBlue};
    }
  }

  .graphics {
    position: absolute;
    right: -80rem;
    bottom: 0rem;
    width: calc(171.3rem / 1.2);
    height: calc(217.1rem / 1.2);
    z-index: -1;
  }
`

const WheatStockContent = ({ wheatContent }) => {
  return (
    <WheatStockSection>
      <div className="wrapper">
        <div className="wysiwyg">
          <div
            dangerouslySetInnerHTML={{
              __html: wheatContent.acf._wfc_whsto_main_content,
            }}
          />
        </div>
      </div>
      <div className="graphics">
        <WheatStock />
      </div>
    </WheatStockSection>
  )
}

export default WheatStockContent
