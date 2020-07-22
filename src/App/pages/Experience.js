import React from 'react'
import styled, { css } from 'styled-components'
import { Fade } from '@material-ui/core'
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
  transition: margin-top .35s; 

  ${({selected}) => selected && css`
    z-index: 999;
  `}

  &:focus,
  &:hover {
    cursor: pointer;
    margin-top: -10px;
    opacity:1;
  }

  &:active{
    margin-top: -20px;
  }
`

const MenuText = styled.div`
  font-family: arial;
  font-size: 32px;
  width: 180px;
  text-align: center;
  user-select: none;
`

const ExpMenu = styled.div``

const TimelineAnimator = styled.div`
  position: absolute;
  width: inherit;
  box-shadow: 3px -2px 5px 0px rgba(0,0,0,0.25);
  transition: opacity .2s, margin-top .35s;
  overflow: hidden;
  border-radius: 10px;

  ${({ show }) => show && css`
    margin-top: 0;
    z-index: 1;
    opacity: 1;
  `};

  ${ ({ show }) => !show && css`
    margin-top: -10px;
    z-index: 0;
    opacity: 0;
    height: auto;
  `};
`

export default class Experience extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      firstSec: true,
      curSection: "Jobs",
      curColor: "#9F87AF",
      altSection: null,
      altColor: null,
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
    if (this.state.firstSec && this.state.curSection !== item.title) {
      this.setState({
        firstSec: false,
        altSection: item.title,
        altColor: item.color
      })
    }
    else if (this.state.altSection !== item.title) {
      this.setState({
        firstSec: true,
        curSection: item.title,
        curColor: item.color
      })
    }
  }

  render() {
    return (
      <ExperienceWrapper>
        <Container>
          <Subheading>My Experience</Subheading>

          <MenuWrapper>
            {this.state.menu.map((item, i) => (
              <MenuItem
                onClick={() => { this.setSection(item) }}
                color={item.color}
                key={i}
                selected={
                  (this.state.firstSec && this.state.curSection === item.title)
                  ||
                  (!this.state.firstSec && this.state.altSection === item.title)
                  ?
                  true:false
                }>
                <MenuText>{item.title}</MenuText>
              </MenuItem>
            ))}
          </MenuWrapper>

          <TimelineAnimator show={this.state.firstSec}>
            <Timeline type={this.state.curSection} color={this.state.curColor} />
          </TimelineAnimator>

          <TimelineAnimator show={!this.state.firstSec}>
            <Timeline type={this.state.altSection} color={this.state.altColor} />
          </TimelineAnimator>

          <Text>Let's get in touch:</Text>

          <Link href="mailto:tamuzp@gmail.com">tamuzp@gmail.com</Link>
        </Container>
      </ExperienceWrapper>
    )
  }
}