import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useMessages() {
    const [cards, setMessages] = useState([])
    const [messagesCollection, loadingMessages, error] = useCollection(
        db.collection('Table')
    )

    useEffect(() => {
        const newMessages = messagesCollection?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages(newMessages)
    }, [messagesCollection])

    return {
        cards,
        loadingMessages,
        error
    }
}

export default useMessages