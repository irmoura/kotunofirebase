import CardSender from '../components/CardSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';

import './Chat.scss'

function Chat() {
    const { cards } = useMessages()

    return <div className="Chat">
        <Messages cards={cards} />
        <CardSender />
    </div>
}

export default Chat