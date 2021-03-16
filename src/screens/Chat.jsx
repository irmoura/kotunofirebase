import CardSender from '../components/CardSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';
import useCards from '../hooks/useCards';

import './Chat.scss'

function Chat() {
    const { cards } = useMessages()
    const { cards2 } = useCards()
    return <div className="Chat">
        <Messages cards={cards} />
        <CardSender cards2={cards2} />
    </div>
}

export default Chat