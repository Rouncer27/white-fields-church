import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {
  standardWrapper,
  H2LatoBlue,
  H3LatoBlue,
  B2OpenSansBlueBold,
  B1OpenSansBlue,
} from "../../styles/helpers"

const TheTeamSection = styled.section`
  padding: 5rem 0;

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;
    text-align: center;

    h2 {
      ${H2LatoBlue};
    }
  }

  .teamContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`

const Member = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

  @media (min-width: 768px) {
    width: calc(50% - 6rem);
    margin: 3rem;
  }

  @media (min-width: 1025px) {
    width: calc(33.33% - 10rem);
    margin: 3rem 5rem;
  }

  .memberImage {
    width: 100%;
  }

  .memberName {
    width: 100%;
    h3 {
      ${H3LatoBlue};
    }
  }

  .memberTitle {
    width: 100%;
    h4 {
      ${B2OpenSansBlueBold};
      text-transform: uppercase;
    }
  }

  .memberdesciption {
    width: 100%;
    p {
      ${B1OpenSansBlue};
    }
  }
`

const TheTeam = ({ theTeam }) => {
  const team = theTeam.acf._wfc_tts_the_team
  return (
    <TheTeamSection>
      <div className="wrapper">
        <div className="title">
          <h2>The Team</h2>
        </div>
        <div className="teamContainer">
          {team.map((member, index) => {
            return (
              <Member key={index}>
                <div className="memberImage">
                  <Img
                    fluid={member.image.localFile.childImageSharp.fluid}
                    alt={member.name}
                  />
                </div>
                <div className="memberName">
                  <h3>{member.name}</h3>
                </div>
                <div className="memberTitle">
                  <h4>{member.title}</h4>
                </div>
                <div
                  className="memberdesciption"
                  dangerouslySetInnerHTML={{ __html: member.description }}
                />
              </Member>
            )
          })}
        </div>
      </div>
    </TheTeamSection>
  )
}

export default TheTeam
