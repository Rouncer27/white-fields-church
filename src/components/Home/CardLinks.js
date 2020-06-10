import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Card from "./Card"
import { colors } from "../../styles/helpers"

gsap.registerPlugin(ScrollTrigger)

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
    gsap.set(cardsItems[0], { autoAlpha: 0, x: -100 })
    gsap.set(cardsItems[1], { autoAlpha: 0, y: 100 })
    gsap.set(cardsItems[2], { autoAlpha: 0, x: 100 })

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: cardTrigger.current,
          start: "top 75%",
          end: "bottom top",
          toggleActions: "restart none none reverse",
          markers: false,
        },
      })
      .add("start")
      .to(
        cardsItems[1],
        { ease: "power2.out", autoAlpha: 1, y: 0, duration: 1.25 },
        "start"
      )
      .to(
        cardsItems[0],
        { ease: "power2.out", autoAlpha: 1, x: 0, duration: 1.25 },
        "start+=0.5"
      )
      .to(
        cardsItems[2],
        { ease: "power2.out", autoAlpha: 1, x: 0, duration: 1.25 },
        "start+=0.5"
      )
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
