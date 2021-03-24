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

    async createCard(quantidade, cards6) {
        const user = auth().currentUser

        //#region Criação de cartas do baralho
        // var cores = ["yellow", "green", "blue", "red"]

        //Cria cartas 0 - Apenas uma de cada cor
        // for (var i = 0; i < 4; i++) {
        //     db.collection('Cards').add({
        //         color: `${cores[i]}`,
        //         number: `${0}`,
        //         uid: ``
        //     })
        // }
        //
        ////Cria cartas númericas exceto o 0 - Duas de cada cor
        // for (var j = 1; j < 10; j++) {//números
        //     for (var k = 0; k < 4; k++) {//cores
        //         for (var l = 0; l < 2; l++) {//duplicar
        //             db.collection('Cards').add({
        //                 color: `${cores[k]}`,
        //                 number: `${j}`,
        //                 uid: ``
        //             })
        //         }
        //     }
        // }
        //#endregion
        //
        for (let i = 0; i < quantidade; i++) {
            db.collection('Cards')
                .doc(cards6[Math.floor(Math.random() * (cards6.length - 1)) + 0].key)
                .update({
                    uid: user.uid
                })
        }
        //
        //Zerar cartas dos jogadores (useAllCardsAvailable deve estar com sinal !=)
        // for (let i = 0; i < cards6.length; i++) {
        //     db.collection('Cards')
        //         .doc(cards6[i].key)
        //         .update({
        //             uid: ''
        //         })
        // }
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

    async updateWinner() {
        const user = auth().currentUser

        db.collection('Table')
            .doc('4946u8QweTu2YbVoJZ7U')
            .update({
                winner: user.displayName
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
    },

    async updateIndexGame(cards3, cards5) {
        var index = Number(cards3[0].index)
        if (index < (cards5.length - 1)) {
            index++
        } else {
            index = 0
        }
        db.collection('Game')
            .doc('pjA3VcOU5nv1FZF4j35T')
            .update({
                index: `${index}`
            })
    }
}

export default MessagingService
