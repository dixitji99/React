import { ActionTypes } from "../Constant/action-types"

export const addToCart = (product:any) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload:product
    };
}

export const removeFromCart = (product:any) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload:product
    }
}

export const clearCart = () => {
    return {
        type: ActionTypes.CLEAR_CART
    }
}

export const incCount = () => {
    return {
        type: ActionTypes.INC_COUNT
    }
}

export const decCount = () => {
    return {
        type: ActionTypes.DEC_COUNT
    }
}