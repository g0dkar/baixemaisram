import React from 'react'
import './css/Home.css'
import banner from './img/banner.png'
import DownloadCTA from './DownloadCTA'
import { Link } from 'react-router-dom'

const Home = ({ linkMap }) => {
    return (
        <>
            <header id="home-header">
                <h1 className="home-header-h1">Baixe mais RAM!</h1>
                <h3 className="home-header-h3">Instant&acirc;neo, r&aacute;pido, GR&Aacute;TIS</h3>
                <div className="home-header-banner">
                    <Link to={linkMap.download} title="Baixe Mais RAM!">
                        <img className="home-header-banner-img" src={banner} alt="Baixe Mais RAM!" />
                    </Link>
                </div>
            </header>

            <DownloadCTA linkMap={linkMap} />
        </>
    )
}

export default Home
