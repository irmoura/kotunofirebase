import { useEffect, useRef } from 'react'
import './Messages.scss'
import './TableCard.css'

function Messages({ cards }) {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [])

    return <div className="Messages" ref={ref}>
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