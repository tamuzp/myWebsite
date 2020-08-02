import React from 'react'
import styled from 'styled-components'
import { AboutMe } from '../Data/data';

// Import Button component
import Button from './../components/Button'

// Import Container component
import Container from './../components/Container'

// Import Section component
import Section from './../components/Section'

// Import typography components
import { Heading, Subheading, Text } from './../components/Typography'

const HomeWrapper = styled(Section)`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  // @media (min-width: 480px) {
  // }

  // @media (min-width: 768px) {
  // }

  // @media (min-width: 1280px) {
  // }

  // //@media (min-width: 1600px) {
  //   background:
  //   radial-gradient(circle at 50% 0,rgba(6, 122, 216, 0.57),rgba(255,0,0,0) 70.71%),
  //   radial-gradient(circle at 6.7% 75%,rgb(255, 255, 255),rgba(0,220,255,0.55) 70.71%),
  //   radial-gradient(circle at 93.3% 75%,rgba(28,36,38,0.95),rgba(0,173,255,0) 70.71%);
  // //}

  &::before {
    position: absolute;
    top: 130px;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    color: #fff;
    display: flex;
    max-height:100%;
    img{
      border: 5px solid;
      border-radius: 50%;
      max-height:200px;
      max-width:200px;
    }
    padding-top: 50vh;
  }

  ${Subheading} {
    margin-left: 10px;
  }
`

const Summary = styled.div`
  padding: 25px;
`

const myPic = require('../../Assets/pictureofme.png')

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper centered id="Home">
        <Container height={100}>
          
            <img src={myPic}/>

          <Summary>
            <Heading color="#fff">{AboutMe.fisrtName} {AboutMe.lastName}</Heading>
          <Subheading>{AboutMe.profession}</Subheading>
          </Summary>

        </Container>
      </HomeWrapper>
    )
  }
}