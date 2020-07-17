import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { standardWrapper, buttonOneBlue } from "../../styles/helpers"

const MessagesListSection = styled.div`
  .wrapper {
    ${standardWrapper};
  }

  .listContainer {
    width: 100%;
    max-width: 80rem;
    margin: 5rem auto;
  }

  .loadMoreBtn {
    width: 100%;
    margin: 5rem auto;
    text-align: center;

    button {
      ${buttonOneBlue};
    }
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

  .videoButton {
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    a {
      ${buttonOneBlue}
    }
  }
`

const MessagesList = props => {
  const [currentDisplay, setCurrentDisplay] = useState({
    currentLimit: 10,
    allCurrentCat: [],
    loadMore: false,
  })
  const { messages, series } = props
  const selectedCategoryMessages = messages.edges.filter(mess => {
    const anyMatch = mess.node.message_type.filter(type => {
      return type === series.wordpress_id
    })
    return anyMatch.length > 0
  })

  const handelLoadMessages = curLimit => {
    setCurrentDisplay({
      currentLimit: curLimit + 10,
      allCurrentCat: selectedCategoryMessages.slice(0, curLimit),
      loadMore: curLimit < selectedCategoryMessages.length,
    })
  }

  useEffect(() => {
    handelLoadMessages(currentDisplay.currentLimit)
  }, [])

  return (
    <MessagesListSection>
      <div className="wrapper">
        <div className="listContainer">
          {currentDisplay.allCurrentCat.map((mess, index) => {
            let videoBtn = null
            if (mess.node.acf._wfc_messages_video_link_req) {
              videoBtn = (
                <div className="videoButton">
                  <a
                    target="_blank"
                    href={mess.node.acf._wfc_messages_video_link}
                  >
                    Watch Sermon Video Here.
                  </a>
                </div>
              )
            }

            return (
              <Message key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mess.node.acf._wfc_mespod_audio_embed,
                  }}
                />
                {videoBtn}
              </Message>
            )
          })}
        </div>
        <div className="loadMoreBtn">
          <button
            onClick={() => {
              handelLoadMessages(currentDisplay.currentLimit)
            }}
            disabled={!currentDisplay.loadMore}
          >
            {currentDisplay.loadMore ? "Load More" : "No More To Load"}
          </button>
        </div>
      </div>
    </MessagesListSection>
  )
}

export default MessagesList
