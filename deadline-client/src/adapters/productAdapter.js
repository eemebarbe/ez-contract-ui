import promiseWrapper from "./promiseWrapper"
import firebase from "../firebase.js"
import "firebase/firestore"
import { Product } from "../dtos"
const db = firebase.firestore()

class ProductAdapter {
    getUsersProducts = async (uid) => {
        const promiseLogic = async () => {
            return await db
                .collection("users")
                .doc(uid)
                .collection("products")
                .get()
        }
        const result = await promiseWrapper(promiseLogic)
        const newArray = result.docs.map((x) => {
            return Product(x)
        })
        return newArray
    }

    addProduct = async (uid, product) => {
        const promiseLogic = async () => {
            return await db
                .collection("users")
                .doc(uid)
                .collection("products")
                .add({
                    price: product.price,
                    description: product.description,
                })
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }

    deleteProduct = async (uid, productId) => {
        const promiseLogic = async () => {
            return await db
                .collection("users")
                .doc(uid)
                .collection("products")
                .doc(productId)
                .delete()
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }

    purchaseProducts = async (orderData) => {
        const promiseLogic = async () => {
            const push = firebase.functions().httpsCallable("chargeCustomer")
            return await push({
                token: orderData.token,
                products: orderData.products,
            })
        }
        const result = await promiseWrapper(promiseLogic)
        return result
    }
}

export default new ProductAdapter()
