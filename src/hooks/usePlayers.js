import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';

function usePlayers() {
    var user = auth().currentUser
    const [cards4, setMessages4] = useState([])
    const [messagesCollection4, loadingMessages4, error4] = useCollection(user == null ?
        null : db.collection('Players').where("uid", "==", user.uid)
    )

    useEffect(() => {
        const newMessages4 = messagesCollection4?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages4(newMessages4)
    }, [messagesCollection4])

    return {
        cards4,
        loadingMessages4,
        error4
    }
}

export default usePlayers