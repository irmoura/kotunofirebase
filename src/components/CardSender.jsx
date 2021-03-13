import { useState } from "react"
import MessagingService from '../services/messaging'
import './CardSender.scss'

function CardSender() {
    const [message, setMessage] = useState('')

    function handleSubmit() {
        var card = {
            number: message,
            color: `rgb(254,0,96)`
        }
        MessagingService.updateCard(card)
        setMessage('')
    }

    return <div className={'MessageSender'}>
        <input
            type="text"
            value={message}
            placeholder="Insira sua mensagem aqui"
            onChange={e => setMessage(e.target.value)}
            onSubmit={handleSubmit}
        />

        <button onClick={handleSubmit}>
            Enviar
    </button>
    </div>
}

export default CardSender