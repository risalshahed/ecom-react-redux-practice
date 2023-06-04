import { ADD_TO_CART, DELETE_CART } from "./actionCreators"

// add to cart
export const addCart = product => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

// delete cart
export const deleteCart = product => {
    return {
        type: DELETE_CART,
        payload: product
    }
}