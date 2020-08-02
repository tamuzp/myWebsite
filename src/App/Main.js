import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import styled, { css } from 'styled-components'

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

import Nav from './components/Nav'

const Parallax = styled.div`
    perspective: 1px;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`
  
const ParallaxLayer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    transform: ${props => props.base ? "translateZ(0)":"translateZ(-1px) scale(2.1)"};
`

const bgImg = require('../Assets/background.png')

class SinglePage extends React.Component {
    render() {
        return (
            <div className="content">
                <Home />
                <About />
                <Experience />
                <Contact />
            </div>
        )
    }
}

export default class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
            <Nav />
            <Parallax className="main-content">
                <ParallaxLayer>
                    <img src={bgImg}/>
                </ParallaxLayer>
                <ParallaxLayer base>
                <div className="content">
                <Home />
                <About />
                <Experience />
                <Contact />
            </div>
                </ParallaxLayer>
            </Parallax>
            </div>
        )
    }
}
