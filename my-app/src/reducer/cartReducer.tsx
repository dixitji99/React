import { ActionTypes } from "../Constant/action-types";
import { OrderModel } from "../Model/OrderModel";

const initialState = {
    cart: [{}],
    count: 0
}
interface PropType {
    type: any;
    payload: OrderModel;
}

export const cartReducer = (state = initialState, { type, payload }: PropType) => {
    switch (type) {
        case ActionTypes.GET_CART:
            return state.cart;
        case ActionTypes.ADD_TO_CART:
            state.cart.push(payload);
            return state.cart;
        default:
            return state;

    }
}

export const cartCountReducer = (state = initialState, { type }: PropType) => {
    switch (type) {
        case ActionTypes.INC_COUNT:
            state.count += 1;
            return state.count;
        case ActionTypes.DEC_COUNT:
            if (state.count > 0)
                state.count -= 1;
            return state.count;
        default:
            return state;

    }
}