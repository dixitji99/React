import { ActionTypes } from "../Constant/action-types";
import { BooksData } from "../Components/Home/BooksData";
import { OrderModel } from "../Model/OrderModel";

interface PropType {
    type: any;
    payload: OrderModel;
}

interface StateType {
    order:OrderModel[];
}

const initialState :StateType= {
    order: []
}
export const orderReducer = (state = initialState, { type, payload }: PropType) => {
    switch (type) {
        case ActionTypes.GET_ORDER_DETAILS:
            return state;
        case ActionTypes.SET_ORDER_DETAILS:
            state.order.push(payload);
            return state;
        default:
            return state;

    }
}