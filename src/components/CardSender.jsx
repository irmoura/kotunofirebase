import { useEffect, useRef } from 'react'
import MessagingService from '../services/messaging'
import { auth } from '../firebase'
import $ from 'jquery'
import './CardSender.scss'
import './PlayerCards.css'

function CardSender({ cards2 }) {

    function handleSubmit(arg) {
        var playerCard = {
            number: arg.target.innerText,
            color: arg.target.style.backgroundColor,
            uid: arg.target.getAttribute("data-card-key")
        }
        var tableCard = {
            number: document.querySelector('.card').innerText,
            cor: document.querySelector('.card').style.backgroundColor
        }
        var cor = playerCard.color
        if (cor === 'red' || cor === 'green' || cor === 'blue' || cor === 'yellow') {
            if (playerCard.color === tableCard.cor || playerCard.number === tableCard.number) {
                // alert(`Jogada permitida`)
                MessagingService.updateCard(playerCard)
                MessagingService.updateUserCard(playerCard)                
            } else {
                console.log(`Jogada não permitida`)
            }
        }
        //🚫🔄
    }

    return <div className={'MessageSender'}>
        {
            cards2.map(message => {
                return <div key={message.key}>
                    <div className="playercard" style={{ backgroundColor: message.color }} onClick={handleSubmit} data-card-key={message.key}>
                        <p>{message.number}</p>
                    </div>
                </div>

            })
        }
    </div>
}

export default CardSender