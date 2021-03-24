import { useEffect, useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function useTable() {
    const [table, setTable] = useState([])
    const [tableCollection, loadingTable, error] = useCollection(db.collection('Table'))

    useEffect(() => {
        const newTable = tableCollection?.docs
            .map(doc => ({
                ...doc.data(),
                key: doc.id
            })).reverse() || []

        setTable(newTable)
    }, [tableCollection])

    return {
        table,
        loadingTable,
        error
    }
}

export default useTable