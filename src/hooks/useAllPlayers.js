import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useAllPlayers() {
    const [cards5, setMessages5] = useState([])
    const [messagesCollection5, loadingMessages5, error5] = useCollection(db.collection('Players').where("status", "==", "1"))

    useEffect(() => {
        const newMessages5 = messagesCollection5?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages5(newMessages5)
    }, [messagesCollection5])

    return {
        cards5,
        loadingMessages5,
        error5
    }
}

export default useAllPlayers