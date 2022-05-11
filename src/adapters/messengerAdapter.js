import promiseWrapper from "./promiseWrapper"
import { Conversation } from "../dtos"
import firebase from "../firebase.js"
import "firebase/firestore"
const db = firebase.firestore()

class MessengerAdapter {
    getConversations = async (participantData, page) => {
        const promiseLogic = async () => {
            const limit = 10
            const conversationsRef = db
                .collection("conversations")
                .where("participants", "array-contains", participantData)
                .orderBy("timestamp", "desc")
            return await conversationsRef.limit(limit).get()
        }
        const result = await promiseWrapper(promiseLogic)
        const newArray = result.docs.map((x) => {
            return Conversation(x)
        })
        return newArray
    }

    monitorForUnread = async (uid, snapshotLogic) => {
        db.collection("conversations")
            .where("unread", "array-contains", uid)
            .onSnapshot((res) => {
                if (res.docs.length) {
                    snapshotLogic(true)
                }
            })
    }

    updateConversation = async (conversationId, snapshotLogic) => {
        db.collection("conversations")
            .doc(conversationId)
            .collection("messages")
            .orderBy("timestamp")
            .onSnapshot((res) => {
                const newArray = res.docs.map((x) => {
                    return x.data()
                })
                snapshotLogic(newArray)
            })
    }

    setUnreadStatus = async (uid, conversationId) => {
        const promiseLogic = async () => {
            return await db
                .collection("conversations")
                .doc(conversationId)
                .set(
                    {
                        unread: firebase.firestore.FieldValue.arrayRemove(uid),
                    },
                    { merge: true }
                )
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }

    sendMessage = async (conversationId, messageData) => {
        const promiseLogic = async () => {
            return await firebase
                .firestore()
                .collection("conversations")
                .doc(conversationId)
                .collection("messages")
                .add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    conversationId: messageData.conversationId,
                    recipient: messageData.recipient,
                    sender: messageData.sender,
                    message: messageData.message,
                    messageType: messageData.messageType,
                })
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }

    createConversation = async (conversationId, initializationData) => {
        const promiseLogic = async () => {
            const composedData = {
                unread: firebase.firestore.FieldValue.arrayUnion(
                    initializationData.unread
                ),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
            return await firebase
                .firestore()
                .collection("conversations")
                .doc(conversationId)
                .set(composedData, { merge: true })
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }
}

export default new MessengerAdapter()
