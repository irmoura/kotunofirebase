import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useIndex() {
    const [cards3, setMessages3] = useState([])
    const [messagesCollection3, loadingMessages3, error3] = useCollection(
        db.collection('Game')
    )

    useEffect(() => {
        const newMessages3 = messagesCollection3?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages3(newMessages3)
    }, [messagesCollection3])

    return {
        cards3,
        loadingMessages3,
        error3
    }
}

export default useIndex