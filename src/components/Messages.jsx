import { useEffect, useRef } from 'react'
import CardSender from '../components/CardSender'
import MessagingService from '../services/messaging'
import $ from 'jquery'
import './Messages.scss'
import './TableCard.css'

function PegarCartas() {
    MessagingService.createCard()
}

function Messages({ cards }) {

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [])

    return <div className="Messages" ref={ref}>
        <button id="btnPegarCartas" onClick={() => { PegarCartas() }}>Pegar Cartas</button>
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