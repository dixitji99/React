import { combineReducers } from "redux";
import { bookReducer } from "./bookReducer";
import { orderReducer } from "./orderReducer";
import store from "../store/store";
const rootReducer=combineReducers({
    allBooks:bookReducer,
    order:orderReducer,
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;