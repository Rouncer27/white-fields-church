import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import * as ScrollMagic from "scrollmagic"
import gsap from "gsap"
// import addIndicators from "debug.addIndicators"

import Card from "./Card"
import { colors } from "../../styles/helpers"

const CardLinksSection = styled.section`
  background-color: ${colors.white};

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const CardLinks = props => {
  const cardTrigger = useRef(null)
  const cardWrapper = useRef(null)
  const cards =
    props.cards.acf._wfc_card_links.length > 0
      ? props.cards.acf._wfc_card_links
      : []

  useEffect(() => {
    const cardsItems = [...cardWrapper.current.children]
    const controller = new ScrollMagic.Controller()
    const timeLine = gsap
      .timeline()
      .add("start")
      .fromTo(
        cardsItems[1],
        { autoAlpha: 0, y: 100 },
        { ease: "power2.out", autoAlpha: 1, y: 0, duration: 0.75 },
        "start"
      )
      .fromTo(
        cardsItems[0],
        { autoAlpha: 0, x: -100 },
        { ease: "power2.out", autoAlpha: 1, x: 0, duration: 0.75 },
        "start+=0.375"
      )

      .fromTo(
        cardsItems[2],
        { autoAlpha: 0, x: 100 },
        { ease: "power2.out", autoAlpha: 1, x: 0, duration: 0.75 },
        "start+=0.375"
      )

    new ScrollMagic.Scene({
      offset: -150,
      reverse: false,
      triggerElement: cardTrigger.current,
    })
      .setTween(timeLine)
      // .addIndicators()
      .addTo(controller)
  }, [])

  return (
    <CardLinksSection id="cardsTrigger" ref={cardTrigger}>
      <div className="wrapper" ref={cardWrapper}>
        {cards.map((card, i) => (
          <Card key={i} card={card} index={i} />
        ))}
      </div>
    </CardLinksSection>
  )
}

export default CardLinks
