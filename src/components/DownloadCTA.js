import React from 'react'
import './css/Download.css'
import { Link } from "react-router-dom"
import ram4gb from './img/ram-4gb.png'
import ram8gb from './img/ram-8gb.png'
import ram16gb from './img/ram-16gb.png'
import ram32gb from './img/ram-32gb.png'

const DownloadOption = ({ amount, img, link }) => {
    return (
        <div className="download-cta-option">
            <div className="download-cta-option-img">
                <img src={img} width="210" height="210" alt={`${amount} GB de RAM`} />
            </div>
            <h2>{amount} GB</h2>
            <div className="download-cta-option-desc">
                <p>DDR4-2400</p>
                <p>10-12-10-27</p>
                <p>1.65V</p>
            </div>
            <div className="download-cta-option-action">
                <Link to={`${link}/${amount}gb`} className="download-cta-option-link">Quero este!</Link>
            </div>
        </div>
    )
}

const DownloadCTA = ({ linkMap }) => {
    const availableOptions = [{
        amount: 4,
        img: ram4gb
    }, {
        amount: 8,
        img: ram8gb
    }, {
        amount: 16,
        img: ram16gb
    }, {
        amount: 32,
        img: ram32gb
    }]

    return (
        <div id="download-cta">
            <h1 className="download-cta-h1">Baixe agora</h1>
            <div className="download-cta-div div-div"></div>
            <p className="download-cta-cta">Por favor, escolha a quantidade de RAM que você gostaria de baixar. RAM nunca é demais!</p>
            <div className="download-cta-options">
                {availableOptions.map(opt => <DownloadOption key={opt.amount} amount={opt.amount} img={opt.img} link={linkMap.download} />)}
            </div>
        </div>
    )
}

export default DownloadCTA
