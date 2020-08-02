import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'

import { NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Collapse from '@material-ui/core/Collapse'


const Header = styled.header`
    top: 0;
    left: 0;
    z-index: 999;
   
    background-color: black;

    @media (min-width:479px){
        height
    }
`
const NavWrapper = styled.div`
    height: 70px;

    @media (max-width: 479px) {
        fles-direction: column;
        align-items: flex-end;
        left: 0;
        flex-direction: column;
        position: absolute;
        background-color: black;
        width: 100%;
    }
`
const NavList = styled.div`
    margin: 0;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    justify-content: flex-end;
    
    @media (min-width: 470px) {
        padding: 38px 38px 0 0;
    }

    @media (max-width: 479px) {
        display: block;
        height: 150px;
        background-color: black;
    }
`

const NavItem = styled.div`
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

    .active {
        color: #888;
    }
`
const NavButton = styled(Button)`
    margin: 16px;
    @media (min-width: 479px) {
        display: none;
    }
`


export default class Nav extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            isMobile: false,
            show: true,
            navMenu: ["Home", "About", "Contact", "Experience"]
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            isMobile: window.innerWidth < 479 ? true : false
        })
    }


    toggleMenu() {
        if (this.state.isMobile) {
            this.setState({
                show: !this.state.show
            })
        }
    }

    MenuItem(props) {
        return (
            <NavItem>
                <NavLink
                    exact
                    to={props.title === "Home" ? "/" : "/" + props.title}
                    onClick={props.onClick}
                    key={props.i}
                >{props.title}</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <Header>
                <NavWrapper>
                    <NavButton onClick={this.toggleMenu}>Menu</NavButton>
                    <Collapse in={this.state.show}>
                        <NavList>
                            {this.state.navMenu.map((title, i) => (
                                <this.MenuItem title={title} onClick={() => {this.toggleMenu()}} key={i} />
                            ))}
                        </NavList>
                    </Collapse>
                </NavWrapper>
            </Header>
        )
    }
}
