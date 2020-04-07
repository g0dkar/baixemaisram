import React, { useState } from 'react'
import './css/Download.css'
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom"
import DownloadCTA from './DownloadCTA'
import ReactGA from 'react-ga'

const maxRAM = 32.0

const Disclaimer = () => <div id="download-cta"><h1 className="download-ram-h1">Aviso</h1><div className="div-div"></div><p>Isto não é uma farsa, não é um vírus, é apenas <strong>um site de piada</strong>, sorria :)</p></div>

const Animation = () => {
    const { amount } = useParams()
    const amountInt = parseInt(amount)
    const [pct, setPct] = useState(0)
    const [phrase, setPhrase] = useState("Pronto para baixar! Basta apenas clicar no botão.")

    const maxTick = Math.max(150, 500 * (amountInt / maxRAM))
    const progressBarStyle = { width: `${pct}%` }
    const videoId = new Date().getDay() === 3 ? "Oct2xKMGOno" : "dQw4w9WgXcQ"

    const tick = amount => {
        setPct(amount)

        // eslint-disable-next-line
        switch (amount) {
            case 1: {
                setPhrase("Inicializando...")
                ReactGA.event({
                    category: "download-ram",
                    action: "start",
                    label: "Started RAM Download",
                    value: amountInt
                })
                break
            }
            case 15: setPhrase("Recebendo toda a RAM..."); break
            case 70: setPhrase("Quase pronto..."); break
            case 90: setPhrase("Instalando..."); break
            case 100: {
                setPhrase("Pronto!")
                ReactGA.event({
                    category: "download-ram",
                    action: "finish",
                    label: "Finished RAM Download",
                    value: amountInt
                })
            }
        }

        if (amount < 100) {
            const nextTick = (Math.random() * maxTick).toFixed(0)
            const nextPct = Math.min(amount + 1, 100)

            setTimeout(() => tick(nextPct), nextTick)
        }
    }

    return (
        <>
            <div id="download-ram">
                <h1 className="download-ram-h1">Baixar {amountInt} GB de RAM</h1>
                <div className="div-div"></div>
                <p>{phrase}</p>
                <div className="progress-bar">
                    <div className="progress" style={progressBarStyle}>{pct}%</div>
                </div>
                {pct < 100
                    ? <button type="button" className="download-ram-btn" onClick={() => tick(1)} disabled={pct !== 0}>Baixar</button>
                    : <p><strong>Download Completo!</strong><br />Clique <a href={`https://www.youtube.com/watch?v=${videoId}`}>aqui</a> para mais informa&ccedil;&otilde;es.</p>}
            </div>
        </>
    )
}

const DownloadRAM = () => <><Animation /><Disclaimer /></>

const Download = ({ linkMap }) => {
    const match = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${match.path}/:amount`}>
                    <DownloadRAM />
                </Route>
                <Route path={match.path}>
                    <DownloadCTA linkMap={linkMap} />
                </Route>
            </Switch>
        </>
    )
}

export default Download
