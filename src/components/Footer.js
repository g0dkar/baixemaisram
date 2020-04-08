import React from 'react'
import './css/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const isWednesday = new Date().getDay() === 3

    return (
        <footer id="sobre">
            <h1 className="footer-h1">Como funciona?</h1>
            <div className="div-div"></div>
            <p>Como que este site funciona, você quer saber? Baixe Mais RAM faz exatamente o que diz na embalagem.
                Nosso website dá a você a habilidade de 'baixar mais RAM' sem custo algum!
                Simplesmente escolha quanto você quer e faça o download.
                Sua velocidade vai melhorar instantaneamente!
            </p>
            <p className="footer-smallprint">&copy; Copyright {currentYear} Todos os direitos e toda a RAM reservados.</p>
            <p className="footer-smallprint">Isto não é uma farsa, não é um vírus, é
                apenas <strong>um site de piada</strong>, sorria {isWednesday ? <em>é quarta-feira meus bacanxs</em> : ":)"}
            </p>
            <p className="footer-smallprint">Baseado no original/clássico: <a href="https://downloadmoreram.com"
                target="_blank" rel="noopener noreferrer">https://downloadmoreram.com</a></p>
        </footer>
    )
}

export default Footer
