import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useAllCardsAvailable() {
    const [cards6, setMessages6] = useState([])
    const [messagesCollection6, loadingMessages6, error6] = useCollection(db.collection('Cards').where("uid", "==", ""))

    useEffect(() => {
        const newMessages6 = messagesCollection6?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages6(newMessages6)
    }, [messagesCollection6])

    return {
        cards6,
        loadingMessages6,
        error6
    }
}

export default useAllCardsAvailable