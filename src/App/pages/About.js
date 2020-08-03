import React from 'react'
import styled from 'styled-components'
import {AboutMe} from '../Data/data'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

const AboutMeWrapper = styled.div`
  border-radius: 25px;
  width: 100%;
  background-color: #eaf2fa;
  padding: 100px 50px;
  box-shadow: 6px 6px 8px 4px rgba(0,0,0,0.15);

  @media(max-width:480px){
    width: auto;
    padding: 70px 35px;
    margin: 10px;
  }
`

export default class About extends React.Component {
  render () {
    return (
      <Section centered id="About">
        <Container height={70}>

          <AboutMeWrapper>
            <Heading>About Me</Heading>
            <Text>{AboutMe.about_me}</Text>
            <a href={"mailto:" + AboutMe.email}>{AboutMe.email}</a>
          </AboutMeWrapper>

        </Container>
      </Section>
    )
  }
}