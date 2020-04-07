import React from 'react'
import './css/Navbar.css'
import { Link, NavLink } from "react-router-dom"
import logo from './img/logo-nav.png'

const Navbar = ({ linkMap }) => {
    const { home, download, about } = linkMap

    return (
        <nav id="mainNav" className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-brand-link"><img src={logo} width="71" height="60" alt="Logo" /></Link>
            </div>
            <ul className="navbar-nav">
                <li className="navbar-nav-item"><NavLink exact to={home} className="navbar-nav-link" activeClassName="current">In&iacute;cio</NavLink></li>
                <li className="navbar-nav-item"><NavLink to={download} className="navbar-nav-link" activeClassName="current">Baixar</NavLink></li>
                <li className="navbar-nav-item"><NavLink to={about} className="navbar-nav-link" activeClassName="current">Sobre</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
