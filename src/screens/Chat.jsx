import CardSender from '../components/CardSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';
import useCards from '../hooks/useCards';
import useIndex from '../hooks/useIndex';
import usePlayers from '../hooks/usePlayers';
import useAllPlayers from '../hooks/useAllPlayers';
import useAllCardsAvailable from '../hooks/useAllCardsAvailable';

import './Chat.scss'

function Chat() {
    const { cards } = useMessages()
    const { cards2 } = useCards()
    const { cards3 } = useIndex()
    const { cards4 } = usePlayers()
    const { cards5 } = useAllPlayers()
    const { cards6 } = useAllCardsAvailable()
    return <div className="Chat">
        <Messages cards={cards} cards2={cards2} cards3={cards3} cards4={cards4} cards5={cards5} cards6={cards6} />
        <CardSender cards2={cards2} cards3={cards3} cards4={cards4} cards5={cards5} />
    </div>
}

export default Chat