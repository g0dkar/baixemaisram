import React from 'react'
import './css/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const isWednesday = new Date().getDay() === 3

    return (
        <footer id="sobre">
            <h1 className="footer-h1">Como funciona?</h1>
            <div className="div-div"></div>
            <p>Como que este site funciona, voc&ecirc; quer saber? Baixe Mais RAM faz exatamente o que diz na embalagem.
                Nosso website d&aacute; a voc&ecirc; a habilidade de 'baixar mais RAM' sem custo algum!
                Simplesmente escolha quanto voc&ecirc; quer e fa&ccedil;a o download.
                Sua velocidade vai melhorar instantaneamente!</p>
                <p className="footer-smallprint">&copy; Copyright {currentYear} Todos os direitos e toda a RAM reservados.</p>
                <p className="footer-smallprint">Isto n&atilde;o &eacute; uma farsa, n&atilde;o &eacute; um v&iacute;rus, &eacute;
                apenas <strong>um site de piada</strong>, sorria {isWednesday ? <em>que é quarta-feira meus bacanxs</em> : ":)"}</p>
                <p className="footer-smallprint">Baseado no original/cl&aacute;ssico: <a href="https://downloadmoreram.com"
                    target="_blank" rel="noopener noreferrer">https://downloadmoreram.com</a>
            </p>
        </footer>
    )
}

export default Footer
