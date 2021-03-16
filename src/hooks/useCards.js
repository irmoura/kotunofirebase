import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db } from '../firebase';

function useCards() {
    var user = auth().currentUser
    const [cards2, setMessages2] = useState([])
    const [messagesCollection2, loadingMessages2, error2] = useCollection(user == null ?
        null : db.collection('Players').where("uid", "==", user.uid)
    )

    useEffect(() => {
        const newMessages2 = messagesCollection2?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setMessages2(newMessages2)
    }, [messagesCollection2])

    return {
        cards2,
        loadingMessages2,
        error2
    }
}

export default useCards