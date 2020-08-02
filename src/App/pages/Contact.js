import React from 'react'
import styled from 'styled-components'
import { AboutMe } from '../Data/data'

// Import AwesomeIcon
import AwesomeIcon from './../components/AwesomeIcon'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Text } from './../components/Typography'

const ContactLink = styled(Link)`
  margin-bottom: 32px;
  display: inline-block;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const ContactIcons = styled.ul`
  padding: 0;
  margin: 0;

  li {
    display: inline-block;
    list-style-type: none;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }


  a {
    font-size: 18px;

    @media (min-width: 480px) {
      font-size: 24px;
    }
  }
`

export default class Contact extends React.Component {
  render () {
    return (
      <Section centered id="Contact" color="#182b3db5">
        <Container height={35} style={{paddingTop:"20px"}}>
          <Heading color="#f3f5f5">Say hello</Heading>

          <Text color="#f3f5f5">{AboutMe.contact}</Text>

          <ContactIcons>
            <li>
              <Link href={"mailto:" + AboutMe.email} target="_blank">
                <AwesomeIcon icon="envelope" size="2x" color="#f3f5f5"/>
              </Link>
            </li>

            <li>
              <Link href={AboutMe.facebook} target="_blank">
                <AwesomeIcon prefix="fab" icon="facebook-square" size="2x" color="#f3f5f5"/>
              </Link>
            </li>

            <li>
              <Link href={AboutMe.linkedin} target="_blank">
                <AwesomeIcon prefix="fab" icon="linkedin" size="2x" color="#f3f5f5"/>
              </Link>
            </li>

            <li>
              <Link href={AboutMe.github} target="_blank">
                <AwesomeIcon prefix="fab" icon="github-square" size="2x" color="#f3f5f5"/>
              </Link>
            </li>
          </ContactIcons>
        </Container>
      </Section>
    )
  }
}