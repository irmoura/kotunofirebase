import { auth, db, firebase } from '../firebase'

const MessagingService = {
    async getMessages() {

        return db
            .collection('Table')
            .then(messages => {
                let _messages = []
                messages.forEach(message => {
                    _messages.push(message.data())
                })
                return _messages
            })
    },

    observeMessages(callback) {
        db.collection('Table').onSnapshot(callback)
    },

    async sendMessage(message) {
        const user = auth().currentUser

        db.collection('Table').add({
            user: {
                uid: user.uid,
                photo: user.photoURL,
                name: user.displayName,
                email: user.email
            },
            message,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
    },

    async createCard() {
        const user = auth().currentUser

        var cores = ["yellow", "green", "blue", "red"]

        db.collection('Cards').add({
            color: `${cores[Math.floor(Math.random() * 4) + 0]}`,
            number: `${Math.floor(Math.random() * 10) + 0}`,
            uid: user.uid
        })
    },

    async updateCard(card) {
        const user = auth().currentUser

        db.collection('Table')
            .doc('4946u8QweTu2YbVoJZ7U')
            .update({
                user: {
                    uid: user.uid,
                    photo: user.photoURL,
                    name: user.displayName,
                    email: user.email
                },
                card: {
                    number: card.number,
                    color: card.color
                }
            })
    },

    async updateUserCard(card) {
        db.collection('Cards')
            .doc(card.uid)
            .update({
                number: card.number,
                color: card.color,
                uid: ''
            })
    }
}

export default MessagingService
