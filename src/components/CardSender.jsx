// import { useEffect, useRef } from 'react'
import MessagingService from '../services/messaging'
// import { auth } from '../firebase'
// import $ from 'jquery'
import './CardSender.scss'
import './PlayerCards.css'

function CardSender({ cards2, cards3, cards4, cards5 }) {

    function jogadaValida(arg) {
        var playerCard = {
            number: arg.target.innerText,
            color: arg.target.style.backgroundColor,
            uid: arg.target.getAttribute("data-card-key")
        }
        var cor = playerCard.color
        if (cor === 'red' || cor === 'green' || cor === 'blue' || cor === 'yellow') {
            return true
        } else {
            return false
        }
    }

    function handleSubmit(arg) {
        // //🚫🔄
        var jogada = jogadaValida(arg)
        var playerCard = {
            number: arg.target.innerText,
            color: arg.target.style.backgroundColor,
            uid: arg.target.getAttribute("data-card-key")
        }
        var tableCard = {
            number: document.querySelector('.card').innerText,
            cor: document.querySelector('.card').style.backgroundColor
        }
        // var cor = playerCard.color
        if (jogada) {
            if (playerCard.color === tableCard.cor || playerCard.number === tableCard.number) {
                if (cards3[0].index === cards4[0].index) {
                    MessagingService.updateCard(playerCard)
                    MessagingService.updateUserCard(playerCard)
                    MessagingService.updateIndexGame(cards3, cards5)//Atualiza index do jogador da vez
                }
            } else {
                console.log(`Jogada não permitida`)
            }
        }
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