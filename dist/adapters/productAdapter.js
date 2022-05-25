"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

require("core-js/modules/es.symbol.description.js");

var _promiseWrapper = _interopRequireDefault(require("./promiseWrapper"));

var _firebase = _interopRequireDefault(require("../firebase.js"));

require("firebase/firestore");

var _dtos = require("../dtos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const db = _firebase.default.firestore();

class ProductAdapter {
  constructor() {
    _defineProperty(this, "getUsersProducts", async uid => {
      const promiseLogic = async () => {
        return await db.collection("users").doc(uid).collection("products").get();
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      const newArray = result.docs.map(x => {
        return (0, _dtos.Product)(x);
      });
      return newArray;
    });

    _defineProperty(this, "addProduct", async (uid, product) => {
      const promiseLogic = async () => {
        return await db.collection("users").doc(uid).collection("products").add({
          price: product.price,
          description: product.description
        });
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });

    _defineProperty(this, "deleteProduct", async (uid, productId) => {
      const promiseLogic = async () => {
        return await db.collection("users").doc(uid).collection("products").doc(productId).delete();
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });

    _defineProperty(this, "purchaseProducts", async orderData => {
      const promiseLogic = async () => {
        const push = _firebase.default.functions().httpsCallable("chargeCustomer");

        return await push({
          token: orderData.token,
          products: orderData.products
        });
      };

      const result = await (0, _promiseWrapper.default)(promiseLogic);
      return result;
    });
  }

}

var _default = new ProductAdapter();

exports.default = _default;