import { ActionTypes } from "../Constant/action-types";
import { OrderModel } from "../Model/OrderModel";

export const getOrder = (order: OrderModel[]) => {
    return {
        type: ActionTypes.GET_ORDER_DETAILS,
        payload: order
    }
}

export const setOrder = (order: OrderModel[]) => {
    return {
        type: ActionTypes.SET_ORDER_DETAILS,
        payload: order
    }
}