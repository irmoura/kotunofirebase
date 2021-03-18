import CardSender from '../components/CardSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';
import useCards from '../hooks/useCards';
import useIndex from '../hooks/useIndex';
import usePlayers from '../hooks/usePlayers';

import './Chat.scss'

function Chat() {
    const { cards } = useMessages()
    const { cards2 } = useCards()
    const { cards3 } = useIndex()
    const { cards4 } = usePlayers()
    return <div className="Chat">
        <Messages cards={cards} cards2={cards2} cards3={cards3} cards4={cards4} />
        <CardSender cards2={cards2} cards3={cards3} cards4={cards4} />
    </div>
}

export default Chat