import React from 'react'
import './css/About.css'

const Navbar = () => {
    return (
        <div id="about">
            <h1>Sobre o BaixeMaisRAM.com.br</h1>
            <div className="div-div"></div>
            <p>Era uma vez uma pessoa que não tinha RAM o bastante. Seu PC era muito lento.
                A pessoa buscou, buscou e <a href="https://lmgtfy.com/?q=how+to+download+more+ram"
                    title="Como baixar mais RAM?" target="_blank" rel="noopener noreferrer">buscou</a>...
                Até que um dia, ela descobriu como baixar mais RAM!
            </p>
            <p>Em um mágico site em inglês chamado <strong>DownloadMoreRAM.com</strong> é possível baixar
                gratuitamente toda a RAM que você quiser. Sem limites, sem amarras, sem custos. Só chegar
                e baixar. E este site foi a inspiração para <em>este</em> site :)
            </p>
            <h1>Mas não é possível <em>baixar</em> RAM! RAM é hardware!</h1>
            <div className="div-div"></div>
            <p>Sabemos disso! <strong>Este site é apenas uma piadinha</strong> para mandar para <em>trollar</em> alguém
                pela internet.
            </p>
            <h1>Créditos</h1>
            <div className="div-div"></div>
            <p>Em primeiro lugar: seja lá quem fez o <a href="https://downloadmoreram.com/">DownloadMoreRAM.com</a>,
                aproveite e dê uma olhadinha no <a href="https://twitter.com/DownloadMoreRAM">twitter oficial</a> deles
                (em inglês). Vez ou outra é postada uma piadinha :)
            </p>
            <p>Este é um projetinho bobo que fiz como exercício depois de fazer <a href="https://fullstackopen.com/en">um
                cursinho online</a> sobre desenvolvimento em React. O <a href="https://github.com/g0dkar/baixemaisram">código-fonte
                está disponível publicamente</a> no Github sob licensa MIT.
            </p>
        </div>
    )
}

export default Navbar
