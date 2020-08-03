import React from 'react'
import styled, { css } from 'styled-components'
import Button from './Button'
import PropTypes from "prop-types";
import { HashLink as Link } from 'react-router-hash-link';

import { NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Collapse from '@material-ui/core/Collapse'


const Header = styled.header`
    top: 0;
    left: 0;
    z-index: 999;
   
    background-color: #09141e;

    @media (min-width:479px){
        height
    }
`
const NavWrapper = styled.div`
    height: ${props => props.show ? "70px" : "0"};
    transition: height .2s;

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
            open: false,
            scrollPos: 0,
            scrollAmount: 0,
            navMenu: ["Home", "About", "Contact", "Experience"]
        }

        this.toggleMenu = this.toggleMenu.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }


    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        document.querySelector('.main-content').addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
        document.querySelector('.main-content').removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const { scrollPos } = this.state;
        if (document.querySelector('.main-content').scrollTop > scrollPos) {
            this.state.scrollAmount++
            if (this.state.scrollAmount > 20) {
                this.setState({
                    scrollPos: document.querySelector('.main-content').scrollTop,
                    show: false
                })
                this.state.scrollAmount = 0
            }
        } else {
            this.setState({
                scrollPos: document.querySelector('.main-content').scrollTop,
                show: true
            });
            this.state.scrollAmount = 0
        }
    }

    updateWindowDimensions() {
        this.setState({
            isMobile: window.innerWidth < 479 ? true : false
        })
    }


    toggleMenu() {
        if (this.state.isMobile) {
            this.setState({
                open: !this.state.open
            })
        }
    }

    MenuItem(props) {
        return (
            <NavItem>
                <Link
                    smooth
                    to={"#" + props.title}
                    onClick={props.onClick}
                    key={props.i}
                >{props.title}</Link>
            </NavItem>
        )
    }

    render() {
        return (
            <Header>
                <NavWrapper show={this.state.show ? true : false}>
                    <NavButton onClick={this.toggleMenu}>Menu</NavButton>
                    <Collapse in={this.state.open || !this.state.isMobile}>
                        <NavList>
                            {this.state.navMenu.map((title, i) => (
                                <this.MenuItem title={title} onClick={() => { this.toggleMenu() }} key={i} />
                            ))}
                        </NavList>
                    </Collapse>
                </NavWrapper>
            </Header>
        )
    }
}
