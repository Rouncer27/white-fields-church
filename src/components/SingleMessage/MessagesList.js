import React from "react"
import styled from "styled-components"
import { standardWrapper } from "../../styles/helpers"

const MessagesListSection = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .listContainer {
    width: 100%;
    max-width: 80rem;
    margin: 5rem auto;
  }
`

const Message = styled.div`
  width: 100%;
  margin: 4rem auto;

  @media (min-width: 768px) {
    width: calc(100%);
    margin: 4rem auto;
  }

  @media (min-width: 1025px) {
    width: calc(100%);
    margin: 5rem auto;
  }
`

const MessagesList = props => {
  const { messages, series } = props
  const selectedCategoryMessages = messages.edges.filter(
    mess => mess.node.message_type[0] === series.wordpress_id
  )

  return (
    <MessagesListSection>
      <div className="wrapper">
        <div className="listContainer">
          {selectedCategoryMessages.map((mess, index) => {
            return (
              <Message key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mess.node.acf._wfc_mespod_audio_embed,
                  }}
                />
              </Message>
            )
          })}
        </div>
      </div>
    </MessagesListSection>
  )
}

export default MessagesList
