import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

const EventsCalendarSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }
`

const EventsCalendar = () => {
  return (
    <EventsCalendarSection>
      <div className="wrapper">
        <div>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FEdmonton&amp;src=ZXRyb3Q1bGtja2cxZDFlcGV2N3FpZzFicHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </EventsCalendarSection>
  )
}

export default EventsCalendar
