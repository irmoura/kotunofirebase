import { useEffect, useRef } from 'react'
// import CardSender from '../components/CardSender'
import MessagingService from '../services/messaging'
// import $ from 'jquery'
import './Messages.scss'
import './TableCard.css'

function Messages({ cards, cards2, cards3, cards4, cards5, cards6 }) {

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

    return <div className="Messages" ref={ref}>
        <button id="btnPegarCartas" onClick={() => { PegarCartas() }}>Pegar Cartas</button>

        {cards5.map(message => {
            return message.index === cards3[0].index ?
                <h3 key={message.key} style={{ color: "black" }}>{message.nome}</h3> :
                null// <h3 key={message.key} style={{ color: "black" }}>{message.nome}</h3>
        })}
        {
            cards.map(message => {
                return <div key={message.key}>
                    <div className="card" style={{ backgroundColor: message.card.color }}>
                        <p>{message.card.number}</p>
                    </div>
                </div>

            })
        }
    </div>
}

export default Messages