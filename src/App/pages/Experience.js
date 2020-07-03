import React from 'react'
import styled from 'styled-components'

import Timeline from '../components/Timeline'

// Import Container component
import Container from '../components/Container'

// Import Link component
import Link from '../components/Link'

// Import Section component
import Section from '../components/Section'

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography'

const ExperienceWrapper = styled(Section)`
  padding-top: 120px;
  padding-bottom: 80px;
`
const PortfolioGrid = styled.div`
  padding-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
`

const PortfolioItem = styled.a`
  display: block;
  cursor: pointer;
  width: 100%;
  transition: opacity .25s ease-in-out;

  &:focus,
  &:hover {
    opacity: .5;
  }

  @media (max-width: 767px) {
    &:nth-child(n+2) {
      margin-top: 16px;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(50% - 32px);

    &:nth-child(odd) {
      margin-right: 32px;
    }

    &:nth-child(even) {
      margin-left: 32px;
    }

    &:nth-child(n+3) {
      margin-top: 48px;
    }
  }

  @media (min-width: 992px) {
    width: calc(33.33333% - 32px);

    &:first-child,
    &:nth-child(4),
    &:nth-child(7) {
      margin-right: 32px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(8), {
      margin-left: 16px;
      margin-right: 16px;
    }

    &:nth-child(3),
    &:nth-child(6),
    &:last-child {
      margin-left: 32px;
    }

    &:nth-child(n+4) {
      margin-top: 24px;
    }
  }
`

const PortfolioItemThumbnail = styled.img`
  max-width: 100%;
  object-fit: contain;
`

export default class Experience extends React.Component {
  render () {
    return (
      <ExperienceWrapper>
        <Container>
          <Subheading>Tamuz Paran</Subheading>

          <Heading>My Experience</Heading>

          <Timeline type="Jobs"/>

          <Timeline type="Military"/>

          <Timeline type="Education"/>

          <Timeline type="Language"/>

          <Text>Let's get in touch:</Text>

          <Link href="mailto:tamuzp@gmail.com">tamuzp@gmail.com</Link>
        </Container>
      </ExperienceWrapper>
    )
  }
}