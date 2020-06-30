import React from 'react'
import { Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

import Nav from './components/Nav'

export default class Main extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <Nav />

                <Route exact={true} path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/portfolio" component={Portfolio}/>
            </div>
        )
    }
}
