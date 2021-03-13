import { useEffect, useRef } from 'react'
import './Messages.scss'

function Messages({ cards }) {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [cards])

    return <div className="Messages" ref={ref}>
        {
            cards.map(message => {
                return <div key={message.key}>
                    <div>
                        <span>
                            {message.card.color}
                        </span>
                        <span>
                            {message.card.number}
                        </span>
                    </div>
                </div>

            })
        }
    </div>
}

export default Messages