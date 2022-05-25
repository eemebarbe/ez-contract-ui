"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _promiseWrapper = _interopRequireDefault(require("./promiseWrapper"));

var _dtos = require("../dtos");

var _firebase = _interopRequireDefault(require("../firebase.js"));

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const db = _firebase.default.firestore();

class MessengerAdapter {
  constructor() {
    _defineProperty(this, "getConversations", async (participantData, page) => {
      const promiseLogic = async () => {
        const limit = 10;
        const conversationsRef = db.collection("conversations").where("participants", "array-contains", participantData).orderBy("timestamp", "desc");
        return await conversationsRef.limit(limit).get();
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      const newArray = result.docs.map(x => {
        return (0, _dtos.Conversation)(x);
      });
      return newArray;
    });

    _defineProperty(this, "monitorForUnread", async (uid, snapshotLogic) => {
      db.collection("conversations").where("unread", "array-contains", uid).onSnapshot(res => {
        if (res.docs.length) {
          snapshotLogic(true);
        }
      });
    });

    _defineProperty(this, "updateConversation", async (conversationId, snapshotLogic) => {
      db.collection("conversations").doc(conversationId).collection("messages").orderBy("timestamp").onSnapshot(res => {
        const newArray = res.docs.map(x => {
          return x.data();
        });
        snapshotLogic(newArray);
      });
    });

    _defineProperty(this, "setUnreadStatus", async (uid, conversationId) => {
      const promiseLogic = async () => {
        return await db.collection("conversations").doc(conversationId).set({
          unread: _firebase.default.firestore.FieldValue.arrayRemove(uid)
        }, {
          merge: true
        });
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });

    _defineProperty(this, "sendMessage", async (conversationId, messageData) => {
      const promiseLogic = async () => {
        return await _firebase.default.firestore().collection("conversations").doc(conversationId).collection("messages").add({
          timestamp: _firebase.default.firestore.FieldValue.serverTimestamp(),
          conversationId: messageData.conversationId,
          recipient: messageData.recipient,
          sender: messageData.sender,
          message: messageData.message,
          messageType: messageData.messageType
        });
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });

    _defineProperty(this, "createConversation", async (conversationId, initializationData) => {
      const promiseLogic = async () => {
        const composedData = {
          unread: _firebase.default.firestore.FieldValue.arrayUnion(initializationData.unread),
          timestamp: _firebase.default.firestore.FieldValue.serverTimestamp()
        };
        return await _firebase.default.firestore().collection("conversations").doc(conversationId).set(composedData, {
          merge: true
        });
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });
  }

}

var _default = new MessengerAdapter();

exports.default = _default;