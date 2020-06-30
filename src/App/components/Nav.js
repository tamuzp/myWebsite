import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

const Header = styled.header`
    posittion: fixed;
    top: 0;
    left: 0;
    z-index: 999;
   
    background-color: black;

    @media (min-width:479px){
        height
    }
`
const NavWrapper = styled.nav`
    padding: 16px 24px;

    @media (max-width: 479px) {
        fles-direction: column;
        align-items: flex-end;
        
        ul{
            padding: 10px 0 0 0;
            margin: 0;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -ms-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            left: 0;
            flex-direction: column;
            position: absolute;
            top: 64px;
            max-height: 0;
            background-color: black;
            width: 100%;
            opacity: 0;

                ${props => props.isOpen && css`                  
                    max-height: 1000px;
                    opacity: 1;                    
                `}
        }

    }
`
const NavList = styled.ul`
    margin: 0;
    display: flex;
    overflow: hidden;
    flex-direction: coulmn;
    justify-content: flex-end;
    list-style-type: none;
    height: auto;
    max-height: 0;

    @media (min-width: 480px) {
        flex-direction: row;
        justify-content: flex-end;
        max-height: 1000px;
    }
`

const NavItem = styled.li`
    & + & {
        margin-top: 12px;
    }

    @media (min-width: 480px) {
        & + & {
            margin-top: 0;
            margin-left: 32px;
        }
    }

    @media (max-width: 479px){
        padding: 0 0 10px 25px;
        border-bottom: solid #707070 1px;    
    }

    a {
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        transition: color .25s ease-in-out;
        font-family: arial;

        &:hover {
            color: #888;
        }
    }
`
const NavButton = styled(Button)`
  @media (min-width: 479px) {
    display: none;
  }
`

export default class Nav extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <Header>
                <NavWrapper isOpen={this.state.show}>
                    <NavButton onClick={this.toggleMenu}>Menu</NavButton>

                    <NavList>
                        <NavItem>
                            <a href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            <a href="/about">About</a>
                        </NavItem>
                        <NavItem>
                            <a href="/contact">Contact</a>
                        </NavItem>
                        <NavItem>
                            <a href="/portfolio">Portfolio</a>
                        </NavItem>
                    </NavList>
                </NavWrapper>
            </Header>
        )
    }
}
