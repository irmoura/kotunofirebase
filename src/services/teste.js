import { useEffect, useState } from 'react';

function CardService() {
    const [cards, setMessages] = useState(``)
    useEffect(() => {
        setMessages(`Hi`)
    }, [])

    return {
        cards
    }
}

export default CardService