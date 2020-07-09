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

const ExperienceWrapper = styled(Section)``

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px 0 10px;
`

const MenuItem = styled.div`
  padding: 10px;
  border-radius: 25px 25px 0 0;
  background-color: ${props => props.color || "#fff"};
  color: #fff;
  transform: scale(1);
  box-shadow:none;
  box-shadow:3px -2px 3px 0px rgba(0,0,0,0.25);
  transition: margin .2s; 

  &:focus,
  &:hover {
    cursor: pointer;
    margin-top: -10px;
    opacity:1;
  }
`

const MenuText = styled.div`
  font-family: arial;
  font-size: 32px;
  width: 180px;
  text-align: center;
`

const ExpMenu = styled.div``



export default class Experience extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      curSection: "Jobs",
      curColor: "#9F87AF",
      menu: [
        {
        title: "Jobs", 
        color: "#9F87AF"
      },
      {
        title: "Education",
        color: "#004E64"
      },
      {
        title: "Military", 
        color: "#00A5CF"
      },
      {
        title: "Language",
        color: "#62D0AD"
      }
    ]
    }

    this.setSection = this.setSection.bind(this)
  }

  setSection(item) {
    this.setState({
      curSection: item.title,
      curColor: item.color
    })
  }

  ExpNav(props) {
    return (
      <MenuItem onClick={props.onClick} color={props.color}>
        <MenuText>{props.title}</MenuText>
      </MenuItem>
    )
  }

  render() {
    return (
      <ExperienceWrapper>
        <Container>
          <Subheading>My Experience</Subheading>

          <MenuWrapper>
            {this.state.menu.map((item, i) => (
              <this.ExpNav title={item.title} key={i} color={item.color} onClick={() => { this.setSection(item) }} />
            ))}
          </MenuWrapper>
        
          <Timeline type={this.state.curSection} color={this.state.curColor}/>

          <Text>Let's get in touch:</Text>

          <Link href="mailto:tamuzp@gmail.com">tamuzp@gmail.com</Link>
        </Container>
      </ExperienceWrapper>
    )
  }
}