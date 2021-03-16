import { useEffect, useRef } from 'react'
import CardSender from '../components/CardSender'
import $ from 'jquery'
import './Messages.scss'
import './TableCard.css'

function Messages({ cards }) {

    // function handleSubmit() {
    //     $('#tabelaRegistros').append(`<tr><td><div class="playercard" style="background-color: red" onclick="${CardSender().handleSubmit}"><p>1</p></div></td></tr>`)
    // }

    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [])

    return <div className="Messages" ref={ref}>
        {/* <button id="btnPegarCartas" onClick={handleSubmit}>Pegar Cartas</button> */}
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