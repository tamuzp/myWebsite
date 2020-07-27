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

const MenuPlaceholder = styled.div`
    height: 80px;
    position: relative;
`

const MenuWrapper = styled.div`
  display: flex;
  margin: 20px 10px 0 10px;
  position: relative;
  
  @media(max-width:480px){
    margin: 0;
    overflow-x: scroll;
    padding-top: 18px;
    }

  @media(min-width:577px){
    justify-content: space-around;
    white-space: nowrap;
    display: flex; /* required */
    flex-flow: row nowrap; /* required */
  }
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
  z-index: ${props => 100 - props.zIndex || 1};
  position: relative;

  @media(max-width:480px){
    display: inline-block;
    margin-right: -3%;
  }

  @media(min-width: 480px){
    box-sizing: border-box; /* required */
    width: 190px; /* required */
    flex: none; /* required */
    }

  ${({ selected }) => selected && css`
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
  
  &.testing{
    position:absolute;
  }
`

const MenuText = styled.div`
  font-family: arial;
  font-size: 32px;
  width: 180px;
  text-align: center;
  user-select: none;
`

export default class ExperienceMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menu: [
                {
                    title: "Jobs",
                    color: "rgb(159, 135, 175)"
                },
                {
                    title: "Education",
                    color: "rgb(0, 78, 100)"
                },
                {
                    title: "Military",
                    color: "rgb(0, 165, 207)"
                },
                {
                    title: "Language",
                    color: "rgb(98, 208, 173)"
                }
            ]
        }

        this.setSection = this.setSection.bind(this)
    }

    setSection(item) {
        this.props.onSelectItem(item)
    }

    render() {
        return (
            <MenuWrapper>
                {this.state.menu.map((item, i) => (
                    <MenuItem className=""
                        onClick={() => { this.setSection(item) }}
                        color={item.color}
                        key={i}
                        zIndex={i}
                        selected={this.props.selected === item.title? true: false}>
                        <MenuText>{item.title}</MenuText>
                    </MenuItem>
                ))}
            </MenuWrapper>
        )
    }
}
