import React from "react"
import styled from "styled-components"

import { colors } from "../../styles/helpers"
import Card from "./Card"

const CardLinksSection = styled.section`
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const CardLinks = props => {
  const cards =
    props.cards.acf._wfc_card_links.length > 0
      ? props.cards.acf._wfc_card_links
      : []
  return (
    <CardLinksSection>
      <div className="wrapper">
        {cards.map((card, i) => (
          <Card key={i} card={card} index={i} />
        ))}
      </div>
    </CardLinksSection>
  )
}

export default CardLinks
