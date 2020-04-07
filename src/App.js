import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TrackingSwitch from './components/TrackingSwitch'
import Download from './components/Download'
import Home from './components/Home'
import About from './components/About'

const linkMap = {
    home: "/",
    download: "/download",
    about: "/sobre"
}

const App = () => {
    return (
        <div className="main">
            <Router>
                <Navbar linkMap={linkMap} />

                <section id="content">
                    <TrackingSwitch>
                        <Route path={linkMap.download}>
                            <Download linkMap={linkMap} />
                        </Route>
                        <Route path={linkMap.about}>
                            <About />
                        </Route>
                        <Route path={linkMap.home}>
                            <Home linkMap={linkMap} />
                        </Route>
                    </TrackingSwitch>
                </section>

                <Footer />
            </Router>
        </div>
    );
}

export default App
