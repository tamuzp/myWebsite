import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';

// Import Button component
import Button from './../components/Button'

// Import Container component
import Container from './../components/Container'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading } from './../components/Typography'

const HomeWrapper = styled(Section)`
  background-image: url(https://source.unsplash.com/t3zrEm88ehc/480x800);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  // @media (min-width: 480px) {
  //   background-image: url(https://source.unsplash.com/t3zrEm88ehc/768x1024);
  // }

  // @media (min-width: 768px) {
  //   background-image: url(https://source.unsplash.com/t3zrEm88ehc/1280x800);
  // }

  // @media (min-width: 1280px) {
  //   background-image: url(https://source.unsplash.com/t3zrEm88ehc/1600x900);
  // }

  //@media (min-width: 1600px) {
    background:
    radial-gradient(circle at 50% 0,rgba(6, 122, 216, 0.57),rgba(255,0,0,0) 70.71%),
    radial-gradient(circle at 6.7% 75%,rgb(255, 255, 255),rgba(0,220,255,0.55) 70.71%),
    radial-gradient(circle at 93.3% 75%,rgba(28,36,38,0.95),rgba(0,173,255,0) 70.71%);
  //}

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper centered>
        <Container>
          <Heading>Tamuz Paran</Heading>

          <Subheading>Web Developer</Subheading>

          <HomeButton href="/portfolio">My work</HomeButton>
        </Container>
      </HomeWrapper>
    )
  }
}