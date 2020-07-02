import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

import Nav from './components/Nav'

export default class Main extends React.Component{
    render() {
        return (
            <HashRouter>
                <div className="wrapper">
                    <Nav />

                    <div className="content">
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/experience" component={Experience} />
                    </div>
                </div>
            </HashRouter>
        )
    }
}
