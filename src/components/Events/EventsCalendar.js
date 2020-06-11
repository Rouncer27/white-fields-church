import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

const EventsCalendarSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .calContainer {
    width: 100%;
  }
`

const EventsCalendar = () => {
  return (
    <EventsCalendarSection>
      <div className="wrapper">
        <div className="calContainer">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23deb46e&amp;ctz=America%2FEdmonton&amp;src=ZXRyb3Q1bGtja2cxZDFlcGV2N3FpZzFicHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000&amp;showNav=1&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
            width="100%"
            height="700"
            frameborder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </EventsCalendarSection>
  )
}

export default EventsCalendar
