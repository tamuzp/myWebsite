import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from './../components/Container'

// Import Link component
import Link from './../components/Link'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

export default class About extends React.Component {
  render () {
    return (
      <Section centered>
        <Container height={70}>
          <Subheading>Tamuz Paran</Subheading>

          <Heading>About Me</Heading>

          <Text>Testing of new CD environment with github actions</Text>

          <Text>placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder </Text>

          <a href="mailto:tamuzp@gmail.com">tamuzp@gmail.com</a>
        </Container>
      </Section>
    )
  }
}