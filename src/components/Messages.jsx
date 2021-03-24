import { useEffect, useRef } from 'react'
// import CardSender from '../components/CardSender'
import MessagingService from '../services/messaging'
// import $ from 'jquery'
import './Messages.scss'
import './TableCard.css'

function Messages({ table, cards3, cards4, cards5, cards6 }) {

    // function alerta() {
    //     if (window.confirm("Deseja passar a vez?")) {
    //         MessagingService.updateIndexGame(cards3)
    //     }
    // }

    function PegarCartas() {
        if (cards3[0].index === cards4[0].index) {
            switch (cards3[0].state) {
                case "0"://Inicio do jogo
                    MessagingService.createCard(7, cards6)
                    MessagingService.updateIndexGame(cards3, cards5)
                    break;
                case "1"://Durante a partida
                    MessagingService.createCard(1, cards6)
                    MessagingService.updateIndexGame(cards3, cards5)
                    break;
                default:
                    break;
            }
        }
    }

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [])

    var gameWinner = ''

    try {
        gameWinner = table[0].winner
    } catch (error) {

    }

    return <div className="Messages" ref={ref}>
        <button id="btnPegarCartas" onClick={() => { PegarCartas() }}>Pegar Cartas</button>

        {cards5.map(message => {
            return message.index === cards3[0].index ?
                <h3 key={message.key} style={{ color: "black", textAlign: "center" }}>{message.nome}</h3> :
                null// <h3 key={message.key} style={{ color: "black" }}>{message.nome}</h3>
        })}
        {
            gameWinner != "" ? <h1 style={{ color: "black", textAlign: "center" }}>{`${gameWinner} ganhou !!!`}</h1> :
                table.map(card => {
                    return <div key={card.key}>
                        <div className="card" style={{ backgroundColor: card.card.color }}>
                            <p>{card.card.number}</p>
                        </div>
                    </div>

                })
        }
    </div>
}

export default Messages